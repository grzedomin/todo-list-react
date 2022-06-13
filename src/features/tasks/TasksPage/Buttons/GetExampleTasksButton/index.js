import { useDispatch, useSelector } from "react-redux";
import { Button, Error } from "../styled";
import { fetchExampleTasks, selectIsError, selectIsLoading } from "../../../tasksSlice";

export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectIsError);

    return (
        <>
            {error ?
                <Error>
                    Wystąpił błąd... niestety nie udało się pobrać przykładowych zadań
                </Error>
                :
                <Button
                    onClick={() => dispatch(fetchExampleTasks())}
                    disabled={loading}
                >
                    {loading ? "Ładowanie..." : " Pobierz przykładowe zadania"}
                </Button>
            }
        </>
    );
};