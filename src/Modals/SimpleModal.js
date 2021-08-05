import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import AppsIcon from "@material-ui/icons/Apps";
import Modal from "@material-ui/core/Modal";


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 500,
      height: 500,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    divImg: {
      width: 200,
      height: 200,
      border: "1px solid black",
    },
    iconButton: {
      border: "none",
      cursor: "pointer",
      background: "none",
    },
    imageList: {
      width: 200,
      height: 200,
    },
  })
);

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const imagem = url('https://ssl.gstatic.com/gb/images/p1_c9bc74a1.png');
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h5>Hello World! I'm a Modal!</h5>
    </div>
  );

  return (
    <div>
      <button className={classes.iconButton} type="button" onClick={handleOpen}>
        <AppsIcon />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
