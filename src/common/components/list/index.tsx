import styled from "@emotion/styled";
import { Grid, Modal, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import { MainColumn, Page } from "../../styledComponents";
import { ElementCard } from "./components/elementCard";
import { ListProps } from "./data";
import AddIcon from "@mui/icons-material/Add";

const ListMainColumn = styled(MainColumn)`
  max-width: 900px;
  padding-top: 8vh;
  max-height: 94vh;
  gap: 40px;
`;

const ListMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const List = <T extends Record<string, any>>({
  ElementExtension,
  data,
  ActionButtons,
  header,
  NewElementForm,
}: ListProps<T>): React.ReactElement => {
  const [page, setPage] = useState(1);
  const elementsPerPage = 5;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedElements = data.slice(
    (page - 1) * elementsPerPage,
    page * elementsPerPage
  );

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Page>
      <ListMainColumn>
        {header && (
          <Typography variant="h4" id="notificationHeader">
            {header}
          </Typography>
        )}
        <div></div>
        <ListMainContent>
          {paginatedElements.map((data, index) => (
            <Grid item xs={12} key={index}>
              <ElementCard
                data={data}
                ElementExtension={ElementExtension}
                ActionButtons={ActionButtons}
              />
            </Grid>
          ))}
        </ListMainContent>
        <Pagination
          count={Math.ceil(data.length / elementsPerPage)}
          page={page}
          onChange={handleChange}
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        />
        {NewElementForm && (
          <>
            <button onClick={handleOpenModal}>
              <AddIcon />
            </button>
            {openModal && (
              <Modal
                component="div"
                open={openModal}
                onClose={handleCloseModal}
              >
                <NewElementForm onClose={handleCloseModal} />
              </Modal>
            )}
          </>
        )}
      </ListMainColumn>
    </Page>
  );
};

export default List;
