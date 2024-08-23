import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { CiSearch } from 'react-icons/ci';
import s from './SearchBar.module.css';

interface FormValues {
  query: string;}

interface SearchBarProps {
  setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setQuery }) => {
  const initialValues: FormValues = {
    query: '',
  };

  const handleSubmit = (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    const { query } = values;

    if (!query.trim()) {
      toast.error('Search field is empty.');
      return;
    }

    setQuery(query);
    resetForm();
  };

  return (
    <header className={s.wraper}>
      <Toaster position="top-right" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <Field
            className={s.input}
            placeholder="Search images and photos"
            name="query"
            type="text"
            autoFocus
          />
          <button className={s.button} type="submit">
            <CiSearch className={s.icon} />
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
