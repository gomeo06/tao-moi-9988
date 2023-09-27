***** {
    margin: 0;
    padding: 0;
    font-family: 'popins', sans-serif;
    box-sizing: border-box;
}

body {
    background: #262a2f;
}

.container {
    width: 400px;
    padding: 25px 35px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 10px;
}

.container p {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 8px;
}

.container input {
    width: 100%;
    height: 50px;
    border: 1px solid #494eea;
    outline: 0;
    padding: 10px;
    margin: 10px 0 20px;
    border-radius: 5px;
}

.container button {
    width: 100%;
    height: 50px;
    background: #494eea;
    color: #fff;
    border: 0;
    outline: 0;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    margin: 20px 0;
    font-weight: 500;
}

#imgBox {
    width: 200px;
    border-radius: 5px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s;
}

#imgBox img {
    width: 100%;
    padding: 10px;
}

#imgBox.show-img {
    display: flex;
    max-height: 300px;
    margin: 10px auto;
    border: 1px solid #d1d1d1;
    text-align: center;
    justify-content: center;
}

.error {
    animation: shake 0.1s linear 10;
}

@keyframes shake {
    0% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-2px);
    }
    580% {
        transform: translateX(0);
    }
    75% {
        transform: translateX(2px);
    }
    100% {
        transform: translateX(0);
