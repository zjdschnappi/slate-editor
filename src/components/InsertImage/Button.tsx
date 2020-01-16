import React, { useState } from 'react';
import QuillIcon from 'quill-icons';
import ToolbarItem from '@/components/Toolbar/ToolbarItem';
import { useEditor } from 'slate-react';
import { uid } from '@/utils';

export const InsertImageButton = () => {
  const editor = useEditor();
  const [id, setId] = useState(uid());

  const reset = () => {
    setId(uid());
  };

  const onChange = (e: any) => {
    const files = e.target.files;
    uploadFiles(files);
    reset();
  };

  const isImageFileType = (type: string): boolean =>
    !!type && type.indexOf('image/') === 0;

  const file2Base64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        resolve(e.target.result);
      };
      const blob = file.getAsFile ? file.getAsFile() : file;
      if (blob instanceof Blob) reader.readAsDataURL(blob);
    });
  };

  const uploadFiles = (files: FileList) => {
    const postFiles = [].slice.call(files);
    postFiles
      .map((file: any) => {
        file.uid = id;
        return file;
      })
      .forEach(file => {
        upload(file).then(() => {
          file2Base64(file).then(url => {
            editor.exec({ type: 'insert_image', url });
          });
        });
      });
  };

  const upload = (file: File) => {
    return new Promise((resolve, reject) => {
      // TODO: 请求图片上传接口
      resolve();
    });
  };

  return (
    <span>
      <input
        id="insert-image"
        key={id}
        type="file"
        hidden
        onChange={onChange}
      />
      <label htmlFor="insert-image">
        <ToolbarItem>
          <QuillIcon.Image />
        </ToolbarItem>
      </label>
    </span>
  );
};
