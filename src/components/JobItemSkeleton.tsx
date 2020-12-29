import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

import JobItem, {
  Item,
  DescriptionContainer,
  TypeOfJob,
  LabelStyled,
} from "./JobItem";

const ItemSkeleton = styled(Item)`
  width: 100%;
`;

const DescriptionContainerSkeleton = styled(DescriptionContainer)`
  width: 100%;
`;

const TypeOfJobSkeleton = styled(TypeOfJob)`
  width: 10rem;
`;

const LabelSkeleton = styled(LabelStyled)`
  width: 100%;
`;

export default function JobItemSkeleton() {
  return (
    <ItemSkeleton as="div">
      <DescriptionContainerSkeleton>
        <TypeOfJobSkeleton>
          <Skeleton />
        </TypeOfJobSkeleton>
        <LabelSkeleton>
          <Skeleton />
        </LabelSkeleton>
      </DescriptionContainerSkeleton>
    </ItemSkeleton>
  );
}
