"use client";

import { useState } from "react";
import { Button, Box, TextField, Modal } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgb(55 65 81)",
  boxShadow: 24,
  p: 4,
  borderRadius: "25px",
  color: "black",
  flexDirection: "row",
};

function workoutRecords() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="bg-gray-700 pb-10 py-7 text-white">
      <div className="py-10 px-10 mt-10 rounded-md max-w-6xl mx-auto">
        <Button
          className={inter.className}
          variant="contained"
          size="large"
          onClick={handleOpen}
        >
          <h1 className="text-2xl capitalize py-3 px-2">New Workout</h1>
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <input
              type="text"
              placeholder="Title"
              className="outline-none px-3 py-4 border border-gray-400 rounded-md ml-0 mb-10 text-white bg-transparent"
            />

            <div className="items-center justify-center">
              <input
                type="datetime-local"
                className="outline-none px-3 py-4 border border-gray-400 rounded-md ml-0 mb-10 text-white bg-transparent"
              />
            </div>

            <Box component="div" className="items-center space-x-3">
              <Button
                className={inter.className}
                variant="contained"
                size="small"
                onClick={handleClose}
              >
                <h1 className="text-lg text-white capitalize">Close</h1>
              </Button>

              <Button
                className={inter.className}
                variant="contained"
                size="small"
                onClick={handleClose}
              >
                <h1 className="text-lg text-white capitalize">Done</h1>
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default workoutRecords;
