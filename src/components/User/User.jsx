import React from 'react'
import styles from './User.module.css';

const User = ({user}) => {
    const {name, picture, email, dob, loading} = user;
    return (
        <div className={`${styles.card} ${loading ? styles.loading : ''}`}>
            <div className={styles.img}>
                <img src={picture?.large} alt="" />
            </div>

            <div className={styles.text}>
                <p>Hi, My name is {name?.first} {name?.last}</p>
                <p>My email address is {email}</p>
                <p>My age is {dob?.age}</p>
            </div>
        </div>
    )
}

export default User;