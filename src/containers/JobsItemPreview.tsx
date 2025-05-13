import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAllJobs } from '../api/getJobsData';

import JobItem, { JobItemDataType } from '../components/JobItem';
import JobItemSkeleton from '../components/JobItemSkeleton';
import Typography from '../layouts/Typography';
import { useTranslation } from 'react-i18next';

const EmptyJobs = styled.div`
  padding: 24px;
  background-color: #fff;
  border-radius: 16px;
  ${Typography('body', 1.6, 700)};
`;

export default function JobsItemPreview() {
  const { t } = useTranslation();

  const [jobsData, setJobsData] = useState<JobItemDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getAllJobs(signal)
      .then((resultData: JobItemDataType[]) => {
        if (resultData) {
          setJobsData(resultData);
        } else {
          setJobsData([]);
        }
      })
      .catch(() => setJobsData([]))
      .finally(() => setIsLoading(false));

    return () => {
      abortController.abort();
      setJobsData([]);
      setIsLoading(false);
    };
  }, []);

  return (
    <div
      style={{ marginTop: '64px', width: '100%' }}
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      {isLoading ? (
        <JobItemSkeleton />
      ) : jobsData.length === 0 ? (
        <EmptyJobs>{t('HPG-108')}</EmptyJobs>
      ) : (
        jobsData.map((jobItemData: JobItemDataType, index) => {
          return <JobItem key={jobItemData.title} jobItemData={jobItemData} />;
        })
      )}
    </div>
  );
}
