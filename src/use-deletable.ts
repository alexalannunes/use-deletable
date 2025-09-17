import { useCallback, useState } from "react";

export function useDeletable<T = string>() {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [target, setTarget] = useState<T | null>(null);

  const onOpenDelete = useCallback((target: T) => {
    setTarget(target);
    setDeleteOpen(true);
  }, []);

  const onCancelDelete = useCallback(() => {
    setTarget(null);
    setDeleteOpen(false);
  }, []);

  return {
    deleteOpen,
    target,
    onOpenDelete,
    onCancelDelete,
  };
}
