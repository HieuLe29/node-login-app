import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message
        setSuccess(''); // Reset success message

        try {
            await axios.post('http://localhost:5000/api/users/forgot-password', { email });
            setSuccess('Reset link sent to your email!'); // Thông báo thành công
        } catch (err) {
            setError('Failed to send reset link. Please try again.'); // Thông báo lỗi
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
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Hiển thị thông báo lỗi */}
            {success && <p style={{ color: 'green' }}>{success}</p>} {/* Hiển thị thông báo thành công */}
            <button type="submit">Send Reset Link</button>
        </form>
    );
};

export default ForgotPassword;