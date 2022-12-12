import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup
  .object({
    referralID: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  })
  .required();

const useSignUp = () => {
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
  const signUpFields = useMemo(
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
        children: [
          {
            value: 'letterNumber',
            label: 'common:authen.requiredpass1',
          },
          { value: 'characters', label: 'common:authen.requiredpass2' },
        ],
        isRequired: true,
      },
      {
        type: 'text',
        name: 'referralID',
        label: 'common:authen.referral',
        placeholder: 'common:authen.referral-placeholder',
        children: [],
        isRequired: false,
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
    errors,
    onSubmit,
    signUpFields,
  };
};

export default useSignUp;
