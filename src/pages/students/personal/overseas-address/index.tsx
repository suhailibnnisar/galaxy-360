import React from 'react';
import FormFooter from '../../../../components/students/FormFooter';
import StudentHeader from '../../../../components/students/StudentHeader';
import StudentsLayout from '../../../../layouts/StudentsLayout';
import { ResidentialForm } from '../residential-address';

interface Props {}

const index = (props: Props) => {
  return (
    <StudentsLayout>
      <div className="flex flex-col w-screen overflow-y-scroll bg-bgPrim">
        <StudentHeader
          text="Overseas/Permanent Address"
          label="Odio augue in nunc praesent in suspendisse tellus."
        />
        <div className="py-sm px-md bg-bgPrim">
          <div className="w-1056px px-4 py-8 bg-white rounded-md shadow-md">
            <ResidentialForm />
          </div>
        </div>
        <FormFooter
          forwardLink="/students/personal/usi"
          backLink="/students/personal/postal-address"
        />
      </div>
    </StudentsLayout>
  );
};

export default index;
