'use client';

import { IKImage, IKUpload, ImageKitProvider } from 'imagekitio-next';
import { env } from '@/env';
import React, {
  ComponentProps,
  forwardRef,
  MouseEventHandler,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  Button,
  ButtonProps,
  ProgressBar,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components';
import IKUploadProps, {
  IKUploadResponse,
} from 'imagekitio-next/src/components/IKUpload/props';
import { cn } from '@/lib/utils';
import { ImageUpIcon, X } from 'lucide-react';
import { TooltipArrow } from '@radix-ui/react-tooltip';
import Image from 'next/image';

/**
 * Asynchronously retrieves the authentication credentials for ImageKit.
 *
 * @returns An object with signature, expire, and token.
 * @throws An error if the request fails.
 */
const authenticator = async () => {
  try {
    const response = await fetch(
      `${env.NEXT_PUBLIC_API_ENDPOINT}/auth/imagekit`,
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`,
      );
    }
    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error: unknown) {
    throw new Error(
      `Authentication request failed: ${
        error instanceof Error ? error.message : 'Unknown error'
      }`,
    );
  }
};

/**
 * Props for the ImageUploader component.
 *
 * Extends the IKUploadProps with additional properties for customizing the upload button
 * and the preview image.
 */
interface ImageUploaderProps
  extends Omit<IKUploadProps, 'onClick' | 'ref' | 'children'> {
  uploadButtonProps?: ButtonProps;
  // Omit both 'path' and 'loading' so that IKImage always uses "lazy" loading.
  previewImageProps?: Omit<ComponentProps<typeof IKImage>, 'path' | 'loading'>;
  hideProgress?: boolean;
  onClear?: () => void;
}

/**
 * A client-rendered component for uploading images using ImageKit.
 *
 * This component wraps the IKUpload component and forwards its ref so that
 * the parent component can programmatically trigger a file selection.
 *
 * It provides upload progress feedback, error handling, and displays a preview
 * of the uploaded image in a tooltip. Once an image is uploaded, the upload button
 * is disabled. The filename is displayed with a remove icon that allows clearing
 * the file (and re-enabling the upload button).
 *
 * @param props - The component props.
 * @param ref - A forwarded ref to the underlying IKUpload input element.
 * @returns A JSX element.
 */
const ImageUploader = forwardRef<HTMLInputElement, ImageUploaderProps>(
  (
    {
      uploadButtonProps,
      previewImageProps,
      onError,
      onUploadProgress,
      onUploadStart,
      onSuccess,
      onClear,
      hideProgress,
      className,
      ...rest
    },
    ref,
  ) => {
    // Local ref for the IKUpload input element.
    const localUploadRef = useRef<HTMLInputElement | null>(null);

    // Expose the local IKUpload ref to the parent via the forwarded ref.
    useImperativeHandle(ref, () => localUploadRef.current as HTMLInputElement);

    // State to store uploaded file info.
    const [file, setFile] = useState<IKUploadResponse | null>(null);
    // State to track upload progress percentage.
    const [uploadProgress, setUploadProgress] = useState<number>(0);

    /**
     * Called when an error occurs during file upload.
     *
     * @param err - The error encountered.
     */
    const handleError: IKUploadProps['onError'] = (err) => {
      onError?.(err);
      console.error('Upload Error:', err);
    };

    /**
     * Called upon a successful file upload.
     *
     * @param res - The response from IKUpload.
     */
    const handleSuccess: IKUploadProps['onSuccess'] = (res) => {
      setFile(res);
      setUploadProgress(100);
      console.log('Upload Success:', res);
      onSuccess?.(res);
    };

    /**
     * Logs the upload progress and updates local state.
     *
     * @param evt - The upload progress event.
     */
    const handleUploadProgress: IKUploadProps['onUploadProgress'] = (evt) => {
      if (evt && evt.loaded && evt.total) {
        const percent = Math.round((evt.loaded / evt.total) * 100);
        setUploadProgress(percent);
      }
      console.log('Upload Progress:', evt);
      onUploadProgress?.(evt);
    };

    /**
     * Called when the file upload starts.
     *
     * @param evt - The event triggered at the start of the upload.
     */
    const handleUploadStart: IKUploadProps['onUploadStart'] = (evt) => {
      setUploadProgress(0);
      console.log('Upload Started:', evt);
      onUploadStart?.(evt);
    };

    /**
     * Handles the click on the Upload button.
     * Triggers a click on the hidden IKUpload input.
     *
     * @param evt - The mouse event.
     */
    const handleUpload: MouseEventHandler<HTMLButtonElement> = (evt) => {
      evt.preventDefault();
      localUploadRef.current?.click();
    };

    const {
      children: uploadButtonContent,
      disabled: uploadButtonDisabled,
      ...restUploadButtonProps
    } = uploadButtonProps || {};

    const isUploading = uploadProgress > 0 && uploadProgress < 100;
    const isFileUploaded = !!file;

    return (
      <ImageKitProvider
        publicKey={env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY}
        urlEndpoint={env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
        authenticator={authenticator}
      >
        <IKUpload
          className={cn('hidden', className)}
          ref={localUploadRef}
          onError={handleError}
          onSuccess={handleSuccess}
          onUploadProgress={handleUploadProgress}
          onUploadStart={handleUploadStart}
          {...rest}
        />
        <Button
          onClick={handleUpload}
          disabled={uploadButtonDisabled || isUploading || isFileUploaded}
          {...restUploadButtonProps}
        >
          <div className='relative flex items-center justify-center'>
            {uploadButtonContent ? uploadButtonContent : 'Upload'}
            <ImageUpIcon className='absolute right-1' />
          </div>
        </Button>
        {!hideProgress && isUploading && <ProgressBar value={uploadProgress} />}
        {file && (
          <TooltipProvider>
            <div className='mt-2 flex items-center space-x-2'>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className='cursor-help underline'>{file.name}</span>
                </TooltipTrigger>
                <TooltipContent
                  side='top'
                  align='center'
                  className='rounded bg-black p-2 text-white'
                >
                  <Image
                    alt={file.name}
                    src={file.thumbnailUrl}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{ width: '200px', height: 'auto' }}
                    {...previewImageProps}
                  />
                  <TooltipArrow className='fill-black' />
                </TooltipContent>
              </Tooltip>
              <button
                type='button'
                onClick={() => {
                  setFile(null);
                  setUploadProgress(0);
                  onClear?.();
                }}
                className='p-1 text-red-500 hover:text-red-700'
                title='Remove file'
              >
                <X className='size-4' />
              </button>
            </div>
          </TooltipProvider>
        )}
      </ImageKitProvider>
    );
  },
);

ImageUploader.displayName = 'ImageUploader';

export default ImageUploader;
