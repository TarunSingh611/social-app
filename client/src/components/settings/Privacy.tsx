import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface PrivacyProps {
  user: {
    accountType?: string;
  };
  onUpdateProfile: (values: any) => void;
}

const privacyOptions = ['public', 'private', 'business'];

const validationSchema = Yup.object().shape({
  accountType: Yup.string().required('Account type is required'),
});

const Privacy: React.FC<PrivacyProps> = ({ user ,onUpdateProfile}) => {
  const formik = useFormik({
    initialValues: {
      accountType: user?.accountType || '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onUpdateProfile(values);
    },
  });

  const handleReset = () => {
      formik.resetForm();
  }
  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold my-2">Privacy</h2>
      <form onSubmit={formik.handleSubmit}>
        {renderEditableDropdown('Account Type', 'accountType', privacyOptions, formik)}
        <div className="flex justify-end">
        <button
                type="button"
                onClick={handleReset}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
              >
                Reset
              </button>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
            disabled={!formik.isValid}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

const renderEditableDropdown = (label: string, fieldName: string, options: string[], formik: any) => (
  <div key={fieldName} className="mb-4">
    <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
      {label}
    </label>
    <select
      id={fieldName}
      name={fieldName}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[fieldName]}
      className="mt-1 p-2 border rounded-md w-full"
    >
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {formik.touched[fieldName] && formik.errors[fieldName] && (
      <div className="text-red-600">{formik.errors[fieldName]}</div>
    )}
  </div>
);

export default Privacy;
