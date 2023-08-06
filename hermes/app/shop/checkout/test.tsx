import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { object, string, number } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface CreditCardFormProps {
  onSubmit: (data: CreditCardFormData) => void;
}

interface CreditCardFormData {
  cardNumber: string;
  cardHolderName: string;
  expirationMonth: number;
  expirationYear: number;
  cvv: string;
}

const schema = object().shape({
  cardNumber: string().required('Card number is required'),
  cardHolderName: string().required('Card holder name is required'),
  expirationMonth: number().required('Expiration month is required').min(1).max(12),
  expirationYear: number().required('Expiration year is required').min(new Date().getFullYear()),
  cvv: string().required('CVV is required'),
});

const CreditCardForm: React.FC<CreditCardFormProps> = ({ onSubmit }) => {
  const { handleSubmit, control, formState } = useForm<CreditCardFormData>({
    resolver: yupResolver(schema),
  });

  const {errors} = formState

  const submitHandler = (data: CreditCardFormData) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="max-w-sm p-6 mx-auto bg-white rounded shadow">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">Card Number</label>
        <Controller
          name="cardNumber"
          control={control}
          render={({ field }) => <input {...field} className="w-full p-2 border rounded" />}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">Card Holder Name</label>
        <Controller
          name="cardHolderName"
          control={control}
          render={({ field }) => <input {...field} className="w-full p-2 border rounded" />}
        />
        <p className="text-xs italic text-red-500">{errors.cardHolderName?.message}</p>
      </div>
      <div className="flex mb-4 space-x-4">
        <div className="w-1/2">
          <label className="block mb-2 text-sm font-bold text-gray-700">Expiration Month</label>
          <Controller
            name="expirationMonth"
            control={control}
            render={({ field }) => <input {...field} type="number" className="w-full p-2 border rounded" />}
          />
          <p className="text-xs italic text-red-500">{errors.expirationMonth?.message}</p>
        </div>
        <div className="w-1/2">
          <label className="block mb-2 text-sm font-bold text-gray-700">Expiration Year</label>
          <Controller
            name="expirationYear"
            control={control}
            render={({ field }) => <input {...field} type="number" className="w-full p-2 border rounded" />}
          />
          <p className="text-xs italic text-red-500">{errors.expirationYear?.message}</p>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">CVV</label>
        <Controller
          name="cvv"
          control={control}
          render={({ field }) => <input {...field} className="w-full p-2 border rounded" />}
        />
        <p className="text-xs italic text-red-500">{errors.cvv?.message}</p>
      </div>
      <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default CreditCardForm;
