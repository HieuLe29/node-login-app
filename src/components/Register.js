import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
          e.preventDefault();
          setError(''); // Reset error message
          setSuccess(''); // Reset success message
      
          try {
              // Gửi yêu cầu đăng ký
              await axios.post('http://localhost:5000/api/users/register', { username, email, password });
              setSuccess('Registration successful!'); // Thông báo thành công
          } catch (err) {
              // In dữ liệu ra console trong catch block
              console.log("Username: ", username);
              console.log("Email: ", email);
              console.log("Password: ", password);
              
              // Kiểm tra lỗi cụ thể và hiển thị thông báo
              console.error(err);
              setError('Registration failed. Please try again.'); // Thông báo lỗi
          }
      };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
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
            {success && <p style={{ color: 'green' }}>{success}</p>} {/* Hiển thị thông báo thành công */}
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;