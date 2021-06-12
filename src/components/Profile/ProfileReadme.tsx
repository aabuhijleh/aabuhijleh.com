import React from "react";
import { LinkUnderline } from "src/components/Link";
import { Markdown } from "src/components/Markdown";
import { Warning } from "src/components/Warning";
import { useReadmeQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  padding: 3rem 0;
  font-size: var(--fz-sm);

  &.reset * {
    margin: revert;
    padding: revert;
  }
`;

export const ProfileReadme: React.FC = () => {
  const username = useStore((state) => state.username);
  const { data, loading, error } = useReadmeQuery({
    variables: { username },
  });

  if (data?.repository?.object?.__typename === "Blob") {
    const content = data?.repository.object.text as string;

    return (
      <Wrapper className="reset">
        <Markdown text={content} />
      </Wrapper>
    );
  }

  if (loading) {
    return <Wrapper>Loading...</Wrapper>;
  }

  if (error) {
    return (
      <Wrapper>
        <Warning>⚠️ Could not download your profile README</Warning>
        <Warning>
          <LinkUnderline href="https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme">
            Here's the documentation
          </LinkUnderline>
        </Warning>
      </Wrapper>
    );
  }

  return null;
};