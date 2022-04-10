import React, { ChangeEvent } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
  })
);

type ControlledSelectPropsType = {
  selectItem: any;
  setSelectItem: (value: any) => void;
};

export const ControlledSelect = ({ selectItem, setSelectItem }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectItem(event.target.value);
    alert(`Your choise is ${event.target.value}`);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="label-city-choise">City</InputLabel>
        <Select
          labelId="label-city-choise"
          id="select"
          value={selectItem}
          onChange={onChangeHandler}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
        >
          <MenuItem value="none">none</MenuItem>
          <MenuItem value="Minsk">Minsk</MenuItem>
          <MenuItem value="Grodno">Grodno</MenuItem>
          <MenuItem value="Vitebsk">Vitebsk</MenuItem>
          <MenuItem value="Gomel">Gomel</MenuItem>
          <MenuItem value="Mogilev">Mogilev</MenuItem>
          <MenuItem value="Brest">Brest</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
