import { useDispatch, useSelector } from "react-redux";
import { Button } from "../StyledButtons/styled";
import { fetchExampleTasks, selectIsLoading } from "../../tasksSlice";

export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectIsLoading);

    return (
        <Button
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={loading}
        >
            {loading ? "Ładowanie..." : " Pobierz przykładowe zadania"}
        </Button>
    );
};