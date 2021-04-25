import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel"
import external from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-ts";
import postcss from "rollup-plugin-postcss"

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
            exclude: 'node_modules/**',
            presets:['@babel/preset-react','@babel/preset-typescript']
        }),
        typescript({
            useTsconfigDeclarationDir: true,
            tsconfigOverride:{
                exclude:['**/*.stories.*']
            }
        }),
        resolve(),
        external(),
        postcss({
            minimize:true,
            plugins:[]
        })

    ]
}   
];