import React from "react";
import styled from "styled-components";
import BookmarkSvg from "./icon_bookmark.svg";
import MarkedBookmarkSvg from "./icon_bookmark.svg";

const BookmarkIconBlock = styled.div`
  &:hover {
    opacity: 0.5;
  }

  .bookmark-icon {
    width: 32px;
    height: 32px;
  }
`;

type BookmarkIconProps = {
  isBookmarked: boolean;
};

function BookmarkIcon({ isBookmarked }: BookmarkIconProps) {
  return (
    <BookmarkIconBlock>
      <img
        className="bookmark-icon"
        src={isBookmarked ? MarkedBookmarkSvg : BookmarkSvg}
        alt="bookmark-icon"
      />
    </BookmarkIconBlock>
  );
}

export default BookmarkIcon;
