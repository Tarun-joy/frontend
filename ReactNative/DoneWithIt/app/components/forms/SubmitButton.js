import React from 'react';
import { useFormikContext } from 'formik';
import colors from '../../config/colors';
import AppButton from '../AppButton';

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} color={colors.primary} />;
}

export default SubmitButton;
