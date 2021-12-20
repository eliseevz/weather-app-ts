import React, {FC, useState} from 'react';

interface FormProps {
    submit: (cityName: string) => void
    error: string
}

const Form: FC<FormProps> = ({submit, error}) => {

    const popular = ["Москва", "Санкт-Петербург", "Нью-йорк", "Лондон"]
    const [data, setData] = useState<string>("")

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.value)
    }

    const submitHandler = (e?: React.MouseEvent<HTMLButtonElement>) => {
        if (data?.length === 0) {
            alert("Поле не должно быть пустым")
            return
        }
        submit(data)
    }

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            submitHandler()
        }
    }

    const handlePopularClick = async (city: string) => {
        setData(city)
        submit(city)
    }

    return (
        <div>
            <div className="input-group mb-3">
                <span className="input-group-text has-validation" id="inputGroup-sizing-default">Город: </span>
                <input
                    value={data}
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={changeHandler}
                    onKeyPress={keyPressHandler}
                />
                <button onClick={submitHandler} className="btn btn-primary">
                    <i className="bi bi-chevron-right"></i>
                </button>
                {
                    error && <div className="w-100 mt-2 text-danger">
                        {error}
                    </div>
                }
            </div>
            <div className="d-flex mb-5">
                {
                    popular.map(city => {
                        return <span role="button" onClick={() => handlePopularClick(city)} className="badge bg-secondary me-2">
                            {city}
                        </span>
                    })
                }
            </div>
        </div>
    );
};

export default Form;
