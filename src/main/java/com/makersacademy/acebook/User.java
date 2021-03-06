package com.makersacademy.acebook;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "`User`")
public class User {

    @Column(name = "id", nullable = false, updatable = false)
    private @Id @GeneratedValue Long id;

    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    public User() {}

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

}