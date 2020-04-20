import React from "react";
import styled from "styled-components";
import Toast from "./common/Toast";
import useToast from "../hooks/useToast";

const ToastContainerBlock = styled.div`
  position: fixed;
  max-width: 100%;
  width: 400px;
  padding: 0 20px;
  bottom: 20px;
  z-index: 999;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

function ToastContainer() {
  const { toasts } = useToast();

  return (
    <ToastContainerBlock>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </ToastContainerBlock>
  );
}

export default ToastContainer;
