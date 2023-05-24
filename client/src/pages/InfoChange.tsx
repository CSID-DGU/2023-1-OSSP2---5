import React, { CSSProperties, useState } from 'react';
import {Routes, Route, Link} from "react-router-dom";
import styles from "./Login.module.css";

type InfoChangeProps = {
  onSubmit: (form: { name: string; password: string }) => void;
};

function InfoChange({ onSubmit }: InfoChangeProps) {
//css 시작
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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

    // h1 TEMPO 스타일
    const titleStyle: CSSProperties= {
        fontWeight:'bold',
        fontSize: '60px'
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
    
    const footerBoxStyle: CSSProperties = {
        width: '20%',
        height: '50px',
        margin: '50px',
        borderRadius: '10px'
    }

    const delText: CSSProperties = {
        color: 'red',
    }
//css 끝 

    const [form, setForm] = useState({
        name: '',
        password: ''
    });

    const { name, password } = form;

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
        name: '',
        password: ''
        }); // 초기화
    };

    return (
        <form onSubmit={handleSubmit} >
            <section style={header}>Tempo_InfoChange</section>
            <div style={mainScreen}>
                <div style={mainBoxStyle}>
                    <h1 style={titleStyle}>TEMPO</h1>
                    <div style={inputTextStyle}>
                        <div>
                            프로필 사진
                            <input style={inputBoxStyle} className="idBox" type="text" name="name" value={name} onChange={onChange} />
                            <button style={boxStyle} type="submit">내PC에서 찾기</button>
                        </div>
                        <div>
                            이름
                            <input style={inputBoxStyle} className="idBox" type="text" name="name" value={name} onChange={onChange} />
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
                            <input style={inputBoxStyle} type="text" name="password" value={password} onChange={onChange} />
                        </div>
                        <div>
                            거주지
                            <select style={optionBoxStyle}>
                                <option style={optionBox}>US</option>
                                <option style={optionBox}>UK</option>
                                <option style={optionBox}>Canada</option>
                                <option style={optionBox}>Australia</option>
                                <option style={optionBox}>New Zealand</option>
                                <option style={optionBox}>japan</option>
                                <option style={optionBox}>China</option>
                                <option style={optionBox}>Korea</option>
                                <option style={optionBox}>Brazil</option>
                                <option style={optionBox}>France</option>
                            </select>
                            <input style={inputBoxStyle} type="text" name="password" value={password} onChange={onChange} />
                        </div>
                    </div>
                    
                </div>
            </div>
            <hr style={hrStyle}></hr>
            <div style={navBtnStyle}>
                <button style={boxStyle} type="submit">변경</button>
                <button style={boxStyle} type="submit">취소</button>
            </div>
            <div style={footer}>
                <button style={footerBoxStyle} type="submit">비밀번호 변경</button>
                <button style={footerBoxStyle} type="submit"><p style={delText}>계정 삭제</p></button>
            </div>
            
        </form>
    );
}

export default InfoChange;