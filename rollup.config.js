import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-ts";

export default [
{
    input:'./src/index.tsx',
    output:[{
        file:'dist/index.js',
        format:'cjs'
    },{
        file:'dist/index.es.tsx',
        format:'es',
        exports:'named'
    }],
    plugins:[
        babel({
            exclude:'node_modules/**',
            presets:['@babel/preset-react','@babel/preset-typescript']
       }),
        typescript({
            useTsconfigDeclarationDir: true,
            tsconfigOverride:{
                exclude:['**/*.stories.*']
            }
        }),
        resolve(),
        external()

    ]
}   
];