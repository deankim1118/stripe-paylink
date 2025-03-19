'use client';

import { useActionState, useEffect } from 'react';
import { actionFunction } from '../utils/types';
import { toast } from 'sonner';

const initialState = {
  message: '',
};

export default function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}
