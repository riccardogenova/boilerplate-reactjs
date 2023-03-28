/** @format */

import { ChangeEvent, memo, useState } from 'react';

import { UIButton } from '../../components-ui/Button';
import { UIForm } from '../../components-ui/Form';
import { UIInput } from '../../components-ui/Input';

export const FormCreate = memo(() => {
  const [value, setValue] = useState<string>('');

  return (
    <UIForm>
      <UIInput
        value={value}
        placeholder="placeholder"
        label="label:"
        onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
      />
      <UIButton onClick={() => console.log('insert your function here')} label="salva" disabled={!value} />
    </UIForm>
  );
});
