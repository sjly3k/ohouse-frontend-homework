import React, { useEffect } from "react";
import styled from "styled-components";
import { Toast as ToastType } from "../../modules/toasts";
import useToast from "../../hooks/useToast";

const ToastBlock = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  margin: 10px auto 0 auto;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
`;

type ToastProps = {
  toast: ToastType;
};

function Toast({ toast }: ToastProps) {
  const { onRemoveToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      onRemoveToast(toast.id);
    }, 3000);

    return () => clearTimeout(timer);
  }, [toast, onRemoveToast]);

  return <ToastBlock>{toast.text}</ToastBlock>;
}

export default Toast;
