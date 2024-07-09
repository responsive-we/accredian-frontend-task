import React from 'react';
import { useForm } from 'react-hook-form';

const ReferralForm = ({ onClose, onSuccess }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://accredian-backend-task-yme9.onrender.com:3001/api/referrals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        onClose();
        onSuccess();
      } else {
        console.error('Failed to submit referral', response.statusText);
      }
    } catch (error) {
      console.error('Failed to submit referral', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-gray-700">Referrer Name</label>
        <input
          type="text"
          {...register('referrerName', { required: 'Referrer Name is required' })}
          className={`w-full px-4 py-2 border rounded-lg ${errors.referrerName ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.referrerName && <span className="text-red-500">{errors.referrerName.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Referrer Email</label>
        <input
          type="email"
          {...register('referrerEmail', { required: 'Referrer Email is required' })}
          className={`w-full px-4 py-2 border rounded-lg ${errors.referrerEmail ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.referrerEmail && <span className="text-red-500">{errors.referrerEmail.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Referee Name</label>
        <input
          type="text"
          {...register('refereeName', { required: 'Referee Name is required' })}
          className={`w-full px-4 py-2 border rounded-lg ${errors.refereeName ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.refereeName && <span className="text-red-500">{errors.refereeName.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Referee Email</label>
        <input
          type="email"
          {...register('refereeEmail', { required: 'Referee Email is required' })}
          className={`w-full px-4 py-2 border rounded-lg ${errors.refereeEmail ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.refereeEmail && <span className="text-red-500">{errors.refereeEmail.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Course to Refer</label>
        <input
          type="text"
          {...register('course', { required: 'Course is required' })}
          className={`w-full px-4 py-2 border rounded-lg ${errors.course ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.course && <span className="text-red-500">{errors.course.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Message (Optional)</label>
        <textarea
          {...register('message')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        ></textarea>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReferralForm;