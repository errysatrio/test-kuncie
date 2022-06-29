import type { NextPage } from 'next';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IServerError } from '../@types/APIResponse';
import { IClassCardData } from '../@types/IClassCard';
import ClassCard from '../components/ClassCard/ClassCard';
import CoreLayout from '../components/CoreLayout/CoreLayout';
import ErrorCard from '../components/ErrorCard/ErrorCard';
import { getAvailableClasses } from '../services/Class';

const Home = () => {
  const [data, setData] = useState<IClassCardData[] | IServerError>([]);
  const route = useRouter();

  const onTapClassCard = (id: number) => {
    route.push(`/${id}`);
  };
  
  useEffect(() => {
    const getClasses = async () => {
      const result = await getAvailableClasses();
      setData(result);
    };
    getClasses();
  });

  if (data instanceof Object && 'message' in data) return (
    <ErrorCard error={data} />
  );

  if ((data instanceof Array && data.length === 0)) return (
    <>
      <h1>please wait</h1>
    </>
  );

  return (
    <>
      {data.map(el => <ClassCard {...el} onTapClassCard={() => onTapClassCard(el.id)} />)}
    </>
  );
};


export default Home;
