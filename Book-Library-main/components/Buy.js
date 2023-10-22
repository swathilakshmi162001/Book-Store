import React from "react";


const Buy = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{color:"#00ffb7",fontSize:25,fontWeight:"bold"}} >Welcome!</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Email</Text>
                <TextInput style={styles.textField} placeholder={'Enter Your Email'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField} >Password</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'Enter Password'} />
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('Books')}>
                <Text style={styles.btnText}>SignIn</Text>
            </TouchableOpacity>
            <Text style={{color:"white",marginTop:10,fontWeight:"bold"}}>Don't Have an Account?</Text>
            <TouchableOpacity>
                <Text style={{color:"#00ffb7"}} onPress={()=>navigation.navigate('Categories')}>Create New Account </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Buy;