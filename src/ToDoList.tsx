import { useForm } from "react-hook-form";

interface IForm {
    toDo?: string;
    email: string;
    id: string;
    password: string;
    password1: string;
    username: string;
    extraError?: string;
}

export default function ToDoList() {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<IForm>({
        defaultValues: {
            email: "@naver.com",
        },
    });
    const onValid = (data: IForm) => {
        if (data.password !== data.password1) {
            return setError(
                "password1",
                {
                    message: "Password are not the same.",
                },
                { shouldFocus: true }
            );
        }
        // setError("extraError", { message: "Server offline" });
        console.log("valid...", data);
    };
    console.log("formstate:", errors);
    return (
        <div>
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit(onValid)}
            >
                <input {...register("toDo")} placeholder="Write a todo!" />
                <input
                    {...register("email", {
                        required: "Email required",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "Your email is not valid form",
                        },
                    })}
                    placeholder="email"
                />
                <span>{errors?.email?.message as string}</span>
                <input
                    {...register("id", {
                        required: "Id is required.",
                        validate: {
                            noNico: (value) =>
                                value.includes("nico")
                                    ? "no nicos allowed"
                                    : true,
                            noHarry: (value) =>
                                value.includes("harry")
                                    ? "no harrys allowed"
                                    : true,
                        },
                    })}
                    placeholder="id"
                />
                <span>{errors?.id?.message as string}</span>
                <input
                    {...register("password", {
                        required: "password is required.",
                    })}
                    placeholder="password"
                />
                <span>{errors?.password?.message as string}</span>
                <input
                    {...register("password1", {
                        required: "password confirm is required.",
                    })}
                    placeholder="password confirm"
                />
                <span>{errors?.password1?.message as string}</span>
                <input
                    {...register("username", {
                        required: "username is required",
                        minLength: {
                            value: 10,
                            message: "Your username is too short.",
                        },
                        validate: (value) =>
                            value.includes("nico")
                                ? "nico is not allowed"
                                : true,
                    })}
                    placeholder="username"
                />
                <span>{errors?.username?.message as string}</span>
                <button>add</button>
                <span>{errors?.extraError?.message as string}</span>
            </form>
        </div>
    );
}

/*
    useForm 이 주는 것
    1) register obj
    - name, onBlur: focus 해제 시, onChange, ref
    - input 요소에 이 객체들을 비구조화할당하여 넣는다.
    - validation option 삽입 가능: html 에 넣으면 유저가 지우거나, 지원하지 않는 기기이거나 하면 작동하지 않을 수 있음. 하지만 여기서 넣으면 javascript로 validation 하기 때문에 보호됨. 
    또한 error 메시지도 등록 가능.
    - 정규식 검사도 가능. 
    - validate: 내맘대로 검사도 가능. 함수 또는 object를 전달, value를 인자로 받아서 검사. true를 리턴하면 통과, false또는 string을 입력하면 error message로 간다. 
    async로 비동기로 만들어 서버에 확인, 응답 받아서 표시도 가능.
    ex) <input
                {...register("email", {
                    required: true,
                    minLength: {
                        value: 10,
                        message: "Your username is too short.",
                    },
                    pattern: {
                        value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                        message: "Your email is not valid form",
                    },
                    validate: {
                        noNico: (value) =>
                            value.includes("nico")
                                ? "no nicos allowed"
                                : true,
                        noHarry: (value) =>
                            value.includes("harry")
                                ? "no harrys allowed"
                                : true,
                    },
                })}
                placeholder="email"
            />
    
    2) watch function
    - 입력값 변화 관찰

    3) handleSubmit function
    - validation, preventDefault, continue code 역할
    - form submit 시 "실행" 해야 함
    - 데이터 유효 시 실행할 함수(필수), 유효하지 않을 시 실행할 함수를 인자로 보냄
    - 유효하지 않을 떄 focus도 시켜 줌

    4) formState
    - error 처리
    - validation 충족하지 못한 모든 item + 조건 return
    - message만 등록해 놓으면 무조건 나오므로, 따로 체크할 필요도 없다
    - 대신, 제출해서 formState를 가져온 이후에만 받을 수 있다

    5) setError
    - 특정 에러 세팅
    return setError("password1", {
        message: "Password are not the same.",
    });
    - interface에 별도 에러를 추가해두면 서버 에러 등 추가 에러도 설정 가능
    - 해당 요소에 focus도 가능 { shouldFocus: true } 

    + type 지정
    - 타입 지정
    - 기본값 지정 (type에서 불러옴)
    - useForm<Interface>({defaultValues: {email: @naver.com}})
*/
