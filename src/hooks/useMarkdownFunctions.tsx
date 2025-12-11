"use client";

import { useCallback, RefObject, Dispatch, SetStateAction } from "react";

export function useMarkdownFunctions(
  textareaRef: RefObject<HTMLTextAreaElement | null>,
  setMarkdownContent: Dispatch<SetStateAction<string>>
) {
  const wrapSelection = useCallback(
    (wrapper: (text: string) => string, defaultText?: string) => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      setMarkdownContent((prev) => {
        const before = prev.slice(0, start);
        const selected = prev.slice(start, end);
        const after = prev.slice(end);

        if (!selected) {
          if (!defaultText) return prev;

          const wrappedDefault = wrapper(defaultText);

          setTimeout(() => {
            const newStart = start;
            const newEnd = start + wrappedDefault.length;
            textarea.selectionStart = newStart;
            textarea.selectionEnd = newEnd;
          }, 0);

          return before + wrappedDefault + after;
        }
        const wrapped = wrapper(selected);

        setTimeout(() => {
          const newStart = start;
          const newEnd = start + wrapped.length;
          textarea.selectionStart = newStart;
          textarea.selectionEnd = newEnd;
        }, 0);

        return before + wrapped + after;
      });
    },
    [textareaRef, setMarkdownContent]
  );

  const applyHeading = useCallback(
    (prefix: string, defaultText?: string) => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      setMarkdownContent((prev) => {
        const before = prev.slice(0, start);
        const selected = prev.slice(start, end);
        const after = prev.slice(end);

        if (!selected) {
          if (!defaultText) return prev;

          const needsNewLine = start > 0 && !before.endsWith("\n");
          const prefixText = needsNewLine ? `\n${prefix}${defaultText}` : `${prefix}${defaultText}`;
          const result = before + prefixText + after;

          setTimeout(() => {
            const newStart = needsNewLine ? start + 1 : start;
            const newEnd = newStart + (prefix + defaultText).length;
            textarea.selectionStart = newStart;
            textarea.selectionEnd = newEnd;
          }, 0);

          return result;
        }

        const transformed = selected
          .split("\n")
          .map((line) => {
            const trimmed = line.trim();
            if (!trimmed) return line;
            const clean = trimmed.replace(/^#+\s*/, "");
            return `${prefix}${clean}`;
          })
          .join("\n");

        setTimeout(() => {
          const newStart = start;
          const newEnd = start + transformed.length;
          textarea.selectionStart = newStart;
          textarea.selectionEnd = newEnd;
        }, 0);

        return before + transformed + after;
      });
    },
    [textareaRef, setMarkdownContent]
  );

  const handleTitleH1 = useCallback(
    () => applyHeading("# ", "Título 1"),
    [applyHeading]
  );
  const handleTitleH2 = useCallback(
    () => applyHeading("## ", "Título 2"),
    [applyHeading]
  );
  const handleTitleH3 = useCallback(
    () => applyHeading("### ", "Título 3"),
    [applyHeading]
  );
  const handleTitleH4 = useCallback(
    () => applyHeading("#### ", "Título 4"),
    [applyHeading]
  );

  const handleList = useCallback( 
    () => applyHeading("- ", "List"),
    [applyHeading]
  )

  const handleBoldText = useCallback(
    () => wrapSelection((text) => `**${text}**`, "texto em negrito"),
    [wrapSelection]
  );

  const handleItalicText = useCallback(
    () => wrapSelection((text) => `*${text}*`, "texto em itálico"),
    [wrapSelection]
  );

  const handleCodeText = useCallback(
    () => wrapSelection((text) => `\`${text}\``, "código"),
    [wrapSelection]
  );

  return {
    handleTitleH1,
    handleTitleH2,
    handleTitleH3,
    handleTitleH4,
    handleBoldText,
    handleItalicText,
    handleCodeText,
    handleList,
  };
}