const mat4LookDirection = function(mat) {
    // https://stackoverflow.com/questions/15697273/how-can-i-get-view-direction-from-the-opengl-modelview-matrix
    // return M.vec3.fromValues(mat[2], mat[6], -mat[10]);

    let q = M.quat.create();
    M.mat4.getRotation(q, mat);
    let rotationMatrix = M.mat3.create();
    M.mat3.fromQuat(rotationMatrix, q);
    
    const forward = M.vec3.fromValues(0, 0, -1);
    let lookDirection = M.vec3.create();
    M.vec3.transformMat3(lookDirection, forward, rotationMatrix);
    return lookDirection;
}

export {mat4LookDirection};