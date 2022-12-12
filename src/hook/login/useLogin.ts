import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  })
  .required();

const useLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      country: 'Viet Nam',
    },
  });

  const loginFields = useMemo(
    () => [
      {
        type: 'email',
        name: 'email ',
        label: 'common:authen.email-add',
        placeholder: 'common:authen.email-placeholder',
        children: [],
        isRequired: true,
      },
      {
        type: 'password',
        name: 'password',
        label: 'common:authen.password',
        placeholder: 'common:authen.password-placeholder',
        isRequired: true,
      },
    ],
    []
  );
  const onSubmit = async () => {
    return true;
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    loginFields,
  };
};

export default useLogin;
