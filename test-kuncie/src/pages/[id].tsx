import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IServerError } from '../@types/APIResponse';
import { IClassDetailsData } from '../@types/IClassDetails';
import ClassDetail from '../components/ClassDetails/ClassDetails';
import ErrorCard from '../components/ErrorCard/ErrorCard';
import { getLearningClassDetails } from '../services/Class';

const ClassDetailsPage = (): React.ReactElement => {
    const [data, setData] = useState<IClassDetailsData | IServerError>({});
    const { query } = useRouter();

    useEffect(() => {
        const updateData = async () => {
            if (query.id) {
                const result = await getLearningClassDetails(query?.id as string);
                setData(result as IClassDetailsData);
            }
        };
        updateData();
    }, [query.id]);

    if (data instanceof Object && 'message' in data) return <ErrorCard error={data} />;

    if ((data instanceof Array && data.length === 0)) return (
        <>
            <h1>please wait</h1>
        </>
    );

    if (!data.id) {
        return (
            <>
                <h1>please wait</h1>
            </>
        );
    }

    return (
        <>
            < ClassDetail data={data} />
        </>
    );
};

export default ClassDetailsPage;
