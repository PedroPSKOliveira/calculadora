import React from "react";
import {Button, Grid, styled} from "@mui/material";
interface GridOperationButtonProps {
    operation: string;
    selectOperation: (operation: string) => void;
    selectedOperation: string;
}

const StyledButton = styled(Button)<{selected: boolean}> ((props) => ({
    backgroundColor: "rgb(254,241,73,.1)",
    borderColor: props.selected ? "#fff" : "rgb(254,241,73, 0.5)",
}))
export const GridOperationButton : React.FC<GridOperationButtonProps> = ({
        operation,
        selectOperation,
        selectedOperation,
})=>{
    return (
        <Grid item xs={3}>
            <StyledButton fullWidth variant="outlined" selected={selectedOperation === operation} onClick={() => selectOperation(operation)}>
                {operation}
            </StyledButton>
        </Grid>
    );
}