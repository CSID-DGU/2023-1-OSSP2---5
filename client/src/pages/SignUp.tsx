import React, { CSSProperties, useState } from 'react';
import {Routes, Route, Link} from "react-router-dom";
import styles from "./Login.module.css";

type SignUpProps = {
  onSubmit: (form: { email:string; name: string; password: string, passwordCk: string; company: string; region: string }) => void;
};

interface User {
    onSubmit: (form: {
        
    email: string;
    password: string;
    passwordCk?: string;
    name: string;
    // birthY?: number;
    // birthM?: number;
    // birthD?: number;
    company?: string;
    region?: string;
        
    
    }) => void;

}

function SignUp({ onSubmit }: User) {
//css 시작
    // const all: CSSProperties = {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // }
    
    //헤더 라인 스타일
    const header: CSSProperties = {
        backgroundColor: '#A6C0EE',
        fontSize: '30px',
        fontWeight: 'bold',
        paddingLeft: '20px',
        height: '50px'
    }
    
    //헤더 아리 전체 메인 화면 스타일
    const mainScreen: CSSProperties= {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // borderBottom: '1px solid',
        width: '100%'
    }

    //'등록'박스 스타일
    const boxStyle: CSSProperties= {
        // backgroundColor:'red',
        height: '40px',
        width: '7rem',
        margin: '10px',
        borderRadius: '10px',
    }

    //메인 박스 스타일
    const mainBoxStyle: CSSProperties= {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'orange',
        height: '50vh',
        paddingTop: '100px',
        paddingBottom: '60px'
       /*
        display: 'flex',
        justifyContent: 'center',
        align-items: 'center,
        min-height: '100vh',
        */
    }

    const titleBox: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    }
    // h1 TEMPO 스타일
    const titleStyle: CSSProperties= {
        
        fontWeight:'bold',
        fontSize: '60px',
        width: '25%',
        
    }


    //입력 박스 스타일
    const inputBoxStyle: CSSProperties= {
        width: '300px',
        height: '40px',
        marginLeft: '25px',
        marginBottom: '25px',
    }

    //입력 박스 옆 텍스트
    const inputTextStyle: CSSProperties= {
        fontSize: '25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignContent: 'space-evenly',
    }

    //가로선 스타일
    const hrStyle: CSSProperties= {
        border: '1px solid black',
        width: '700px',
        marginTop: '30px'
        // border: solid 10px red
    }

    //nav 버튼 스타일
    const navBtnStyle: CSSProperties= {
        fontWeight: 'bold',
        // display: 'flex:',
        // flex: 1,
        // alignItems: 'space-evenly',
        // // justifyContent: 'space-evenly',
        // width: '500px',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }

    //선택 옵션 리스트 스타일
    const optionBoxStyle: CSSProperties= {
        // display: 'flex',
        // flex: 1,
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-evenly',
        height: '40px',
        width: '5rem',
        // margin: '10px',
        // borderRadius: '10px',
        display: 'inline-block',
        marginRight: '20px',
        marginTop: '5px'
    }

    const optionBox: CSSProperties ={
        width: '100%',
        textAlign: 'center'
    }

    const birthBox: CSSProperties = {
        marginBottom: '30px',
    }

    const footer: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
    }


    const delText: CSSProperties = {
        color: 'red',
    }

    //세로선
    const vLine: CSSProperties = {
        // borderLeft: 'thick solid red',
        // width: '500px',
        // height: '50px',
        border: '1px solid red',
        width: '100px',
        marginTop: '30px',
        color: 'red'
        
    }

    const mainBody: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        placeItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }

    const userIcon: CSSProperties = {
        fontSize: '4rem',
        fontWeight: 'lightweight',
        borderColor: 'gray',
        marginLeft: '50px',
        marginRight: '20px'
    }

    const leftDiv: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        borderRight: '3px solid gray',
        marginLeft: '50px'
    }

    const letfDivComp: CSSProperties = {
        marginLeft: '20%',
    }

    const rightDiv: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '100px',
        width: '40%'
    }

//css 끝 

    const [form, setForm] = useState({
        email:'',
    password: '',
    passwordCk: '',
    name: '',
    birthY: '',
    birthM: '',
    birthD: '',
    company: '',
    region: '',
    });

    const { 
        email,
        password,
        passwordCk,
        name,
        birthY,
        birthM,
        birthD,
        company,
        region
     } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
        ...form,
        [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // 여기도 모르니까 any 로 하겠습니다.
        e.preventDefault();
        onSubmit(form);
        setForm({
            email:'',
            password: '',
            passwordCk: '',
            name: '',
            birthY: '',
            birthM: '',
            birthD: '',
            company: '',
            region: '',
        }); // 초기화
    };

    return (
        <form onSubmit={handleSubmit}>

            <section style={header}>Tempo_SignUp</section>
            <div style={titleBox}>
                <h1 style={titleStyle}>TEMPO</h1>
            </div>
            <div style={mainScreen}>

            
                <div style={mainBody}>

                    {/* 왼쪽 div */}
                    <div style={leftDiv}>
                        <div style={letfDivComp}>
                            <section style={inputTextStyle}>
                                    E-mail
                                    <input style={inputBoxStyle} className="idBox" type="text" name="email" value={email} onChange={onChange} />
                            </section>
                            <br/>
                            <section style={inputTextStyle}>
                                    Password
                                    <input style={inputBoxStyle} type="text" name="password" value={password} onChange={onChange} placeholder="이름, 숫자, 특수기호 포함 8~16자리"/>
                                    <br />
                            </section>
                            <section style={inputTextStyle}>
                                    Password Check
                                    <input style={inputBoxStyle} type="text" name="passwordCk" value={passwordCk} onChange={onChange} />
                                    <br />
                            </section>
                        </div>
                    </div>

                    {/* 세로선
                    <hr style={vLine}></hr> */}

                    {/* 오른쪽 div */}
                    <div style={rightDiv}>
                        <div style={mainBoxStyle}>
                            <div style={inputTextStyle}>
                                <div>
                                    프로필 사진
                                    <i className="far fa-user-circle" style={userIcon}></i>
                                    <button style={boxStyle} type="submit">내PC에서 찾기</button>
                                </div>
                                <div>
                                    이름
                                    <input style={inputBoxStyle} className="idBox" type="text" name="name" value={name} onChange={onChange} />
                                </div>
                                <div style={birthBox}>
                                    생년월일
                                    {/* value={year} */}
                                    <div>
                                        <select style={optionBoxStyle}>
                                            <option style={optionBox}>2003</option>
                                            <option style={optionBox}>2002</option>
                                            <option style={optionBox}>2001</option>
                                            <option style={optionBox}>2000</option>
                                            <option style={optionBox}>1999</option>
                                            <option style={optionBox}>1998</option>
                                            <option style={optionBox}>1997</option>
                                            <option style={optionBox}>1996</option>
                                            <option style={optionBox}>1995</option>
                                            <option style={optionBox}>1994</option>
                                            <option style={optionBox}>1993</option>
                                        </select>
                                        <select style={optionBoxStyle}>
                                            <option style={optionBox}>1</option>
                                            <option style={optionBox}>2</option>
                                            <option style={optionBox}>3</option>
                                            <option style={optionBox}>4</option>
                                            <option style={optionBox}>5</option>
                                            <option style={optionBox}>6</option>
                                            <option style={optionBox}>7</option>
                                            <option style={optionBox}>8</option>
                                            <option style={optionBox}>9</option>
                                            <option style={optionBox}>10</option>
                                            <option style={optionBox}>11</option>
                                            <option style={optionBox}>12</option>
                                        </select>
                                        <select style={optionBoxStyle}>
                                            <option style={optionBox}>1</option>
                                            <option style={optionBox}>2</option>
                                            <option style={optionBox}>3</option>
                                            <option style={optionBox}>11</option>
                                            <option style={optionBox}>12</option>
                                            <option style={optionBox}>13</option>
                                            <option style={optionBox}>21</option>
                                            <option style={optionBox}>22</option>
                                            <option style={optionBox}>23</option>
                                            <option style={optionBox}>31</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    소속
                                    <input style={inputBoxStyle} type="text" name="company" value={company} onChange={onChange} />
                                </div>
                                <div>
                                    거주지
                                    <br/>
                                    <select style={optionBoxStyle} name="city" id="region">
                                        <option style={optionBox} value="US">US</option>
                                        <option style={optionBox} value="UK">UK</option>
                                        <option style={optionBox} value="Canada">Canada</option>
                                        <option style={optionBox} value="Australia">Australia</option>
                                        <option style={optionBox} value="New Zealand">New Zealand</option>
                                        <option style={optionBox} value="japan">japan</option>
                                        <option style={optionBox} value="China">China</option>
                                        <option style={optionBox} value="Korea">Korea</option>
                                        <option style={optionBox} value="Brazil">Brazil</option>
                                        <option style={optionBox} value="France">France</option>
                                    </select>
                                    <input style={inputBoxStyle} type="text" name="region" value={region} onChange={onChange} placeholder="{document.getElementById('city')}"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <hr style={hrStyle}></hr>
            <div style={navBtnStyle}>
                <button style={boxStyle} type="submit">회원가입</button>
                <button style={boxStyle} type="submit">취소</button>
            </div>
            
        </form>
    );
}

export default SignUp;