import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;

  .scan-amount {
    color: red;
  }

  .search-billing {
    width: 250px;
    margin-right: 20px;
  }

  & > p {
    min-width: 150px;
  }

  .addBtn {
    margin-left: 10px;
  }

  .error-msg {
    margin: 0;
    margin-left: 10px;
  }
`;
