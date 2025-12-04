import 'react-toastify';

declare module 'react-toastify' {
  interface Toast {
    custom(content: React.ReactNode, options?: ToastOptions): Id;
  }
}
