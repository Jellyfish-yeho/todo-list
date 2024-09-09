import { useForm } from "react-hook-form";

export default function ToDoList() {
    /*
        useForm 이 주는 것
        1) register obj
        - name, onBlur: focus 해제 시, onChange, ref
        - input 요소에 이 객체들을 비구조화할당하여 넣는다.
        - validation option 삽입 가능: html 에 넣으면 유저가 지우거나, 지원하지 않는 기기이거나 하면 작동하지 않을 수 있음. 하지만 여기서 넣으면 javascript로 validation 하기 때문에 보호됨. 
        또한 error 메시지도 등록 가능.
        - 정규식 검사도 가능. 
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
    */
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onValid = (data: any) => {
        console.log("valid...", data);
    };
    console.log("formstate:", errors);
    return (
        <div>
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit(onValid)}
            >
                <input
                    {...register("toDo", { required: true })}
                    placeholder="Write a todo!"
                />
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
                    {...register("id", { required: true })}
                    placeholder="id"
                />
                <input
                    {...register("password", { required: true })}
                    placeholder="password"
                />
                <input
                    {...register("password confirm", { required: true })}
                    placeholder="password confirm"
                />
                <input
                    {...register("username", {
                        required: "username is required",
                        minLength: {
                            value: 10,
                            message: "Your username is too short.",
                        },
                    })}
                    placeholder="username"
                />
                <input
                    {...register("nickname", { required: true })}
                    placeholder="nickname"
                />
                <button>add</button>
            </form>
        </div>
    );
}
