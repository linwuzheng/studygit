/**
 * true||false
 * false||true
 * (true||false)&&false
 * (true||false)&&true
 * (true&&false)||false
 * (true&&false)||true
 * (false||true)&&false
 * (false||true)&&true
 */
function isBoolean(){
    if(isTrue() || isFalse()){
        console.log('true || false');
    }

    if(isFalse() || isTrue()){
        console.log('false || true');
    }
}

function isTrue(a){
    console.log('true');
    return true;
}

function isFalse(){
    console.log('false');
    return false;
}

isBoolean();