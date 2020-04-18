import React from "react";
import styled from "styled-components";
import BookmarkSvg from "./icon_bookmark.svg";
import MarkedBookmarkSvg from "./icon_bookmark.svg";

const BookmarkIconBlock = styled.div`
  .bookmark-icon {
    width: 32px;
    height: 32px;

    &:hover {
      opacity: 0.5;
    }
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
      />
    </BookmarkIconBlock>
  );
}

export default BookmarkIcon;
