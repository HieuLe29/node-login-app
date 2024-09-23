import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
            // Lưu token vào local storage
            localStorage.setItem('token', response.data.token);
            // Xử lý thành công (ví dụ: điều hướng đến trang chính)
            alert('Login successful!');
        } catch (err) {
            setError('Invalid email or password'); // Xử lý lỗi
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Hiển thị thông báo lỗi */}
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;