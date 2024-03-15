"use client";
import { useState } from "react";
import {
  EnvelopeOpenIcon,
  FlagIcon,
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
  CheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { Alert, AlertDescription, AlertTitle } from "./shadcn/alert";
import copy from "clipboard-copy";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [copyErr, setCopyErr] = useState(false);

  const handleCopyToClipboard = async () => {
    try {
      await copy("info@AndreasFreiburg.com");
      setCopied(true);
    } catch (err) {
      setCopyErr(true);
      console.error("Unable to copy to clipboard", err);
    }
  };
  return (
    <div className="pt-4 w-full text-sm lg:text-base">
      <div className="flex flex-row pb-4 items-center w-full">
        <FlagIcon className="w-6 mx-2" />
        <p className="text-wrap">Helena, MT, USA</p>
      </div>
      <div className="flex flex-row items-center w-full">
        <EnvelopeOpenIcon className="w-6 mx-2" />
        <p className="overflow-clip">info@AndreasFreiburg.com</p>
        {copied ? (
          <ClipboardDocumentCheckIcon className="w-6 ml-1 text-tertiary" />
        ) : (
          <ClipboardDocumentIcon
            className="w-6 ml-1 text-tertiary hover:cursor-pointer hover:underline"
            onClick={handleCopyToClipboard}
          />
        )}
      </div>
      {copied && (
        <Alert className="mt-4">
          <CheckIcon className="h-4 w-4" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            Email has been copied to clipboard
          </AlertDescription>
        </Alert>
      )}
      {copyErr && (
        <Alert className="mt-4" variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Unable to copy to clipboard</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default Contact;
