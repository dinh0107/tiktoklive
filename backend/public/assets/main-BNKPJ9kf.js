var Hd=Object.defineProperty;var Vd=(r,t,e)=>t in r?Hd(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var $=(r,t,e)=>Vd(r,typeof t!="symbol"?t+"":t,e);import"./modulepreload-polyfill-B5Qt9EMX.js";import{c as Wd,d as Xd,p as qd,b as Yd}from"./socket-NySeMy-H.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cl="172",$d=0,mc=1,Kd=2,Jh=1,jd=2,Yn=3,gi=0,je=1,on=2,fi=0,Tr=1,Bn=2,_c=3,gc=4,Zd=5,Oi=100,Jd=101,Qd=102,tf=103,ef=104,nf=200,rf=201,sf=202,af=203,Ao=204,Co=205,of=206,lf=207,cf=208,hf=209,uf=210,df=211,ff=212,pf=213,mf=214,Ro=0,Po=1,Do=2,Dr=3,Io=4,Lo=5,Uo=6,Fo=7,Qh=0,_f=1,gf=2,Jn=0,vf=1,xf=2,Mf=3,Sf=4,yf=5,Ef=6,Tf=7,tu=300,Ir=301,Lr=302,fa=303,No=304,Pa=306,pa=1e3,zi=1001,Oo=1002,dn=1003,bf=1004,As=1005,Ke=1006,Oa=1007,ki=1008,ti=1009,eu=1010,nu=1011,us=1012,Rl=1013,Yi=1014,Nn=1015,Ss=1016,Pl=1017,Dl=1018,Ur=1020,iu=35902,ru=1021,su=1022,Rn=1023,au=1024,ou=1025,br=1026,Fr=1027,Il=1028,Ll=1029,lu=1030,Ul=1031,Fl=1033,ia=33776,ra=33777,sa=33778,aa=33779,Bo=35840,zo=35841,ko=35842,Go=35843,Ho=36196,Vo=37492,Wo=37496,Xo=37808,qo=37809,Yo=37810,$o=37811,Ko=37812,jo=37813,Zo=37814,Jo=37815,Qo=37816,tl=37817,el=37818,nl=37819,il=37820,rl=37821,oa=36492,sl=36494,al=36495,cu=36283,ol=36284,ll=36285,cl=36286,wf=3200,Af=3201,hu=0,Cf=1,ci="",se="srgb",Nr="srgb-linear",ma="linear",Qt="srgb",tr=7680,vc=519,Rf=512,Pf=513,Df=514,uu=515,If=516,Lf=517,Uf=518,Ff=519,hl=35044,xc="300 es",Zn=2e3,_a=2001;class Wr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ba=Math.PI/180,ga=180/Math.PI;function pi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[r&255]+Ue[r>>8&255]+Ue[r>>16&255]+Ue[r>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Bt(r,t,e){return Math.max(t,Math.min(e,r))}function Nf(r,t){return(r%t+t)%t}function za(r,t,e){return(1-e)*r+e*t}function Un(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function te(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Bt(this.x,t.x,e.x),this.y=Bt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Bt(this.x,t,e),this.y=Bt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Bt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(t,e,n,i,s,a,o,l,c){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],T=i[1],y=i[4],x=i[7],b=i[2],A=i[5],w=i[8];return s[0]=a*_+o*T+l*b,s[3]=a*m+o*y+l*A,s[6]=a*f+o*x+l*w,s[1]=c*_+h*T+u*b,s[4]=c*m+h*y+u*A,s[7]=c*f+h*x+u*w,s[2]=d*_+p*T+g*b,s[5]=d*m+p*y+g*A,s[8]=d*f+p*x+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ka.makeScale(t,e)),this}rotate(t){return this.premultiply(ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ka=new Lt;function du(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function va(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Of(){const r=va("canvas");return r.style.display="block",r}const Mc={};function Mr(r){r in Mc||(Mc[r]=!0,console.warn(r))}function Bf(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function zf(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kf(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Sc=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yc=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gf(){const r={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Qt&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qt&&(i.r=wr(i.r),i.g=wr(i.g),i.b=wr(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?ma:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Nr]:{primaries:t,whitePoint:n,transfer:ma,toXYZ:Sc,fromXYZ:yc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:se},outputColorSpaceConfig:{drawingBufferColorSpace:se}},[se]:{primaries:t,whitePoint:n,transfer:Qt,toXYZ:Sc,fromXYZ:yc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:se}}}),r}const Yt=Gf();function Qn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function wr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let er;class Hf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{er===void 0&&(er=va("canvas")),er.width=t.width,er.height=t.height;const n=er.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=er}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=va("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Qn(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vf=0;class fu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=pi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ga(i[a].image)):s.push(Ga(i[a]))}else s=Ga(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ga(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wf=0;class Be extends Wr{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=zi,i=zi,s=Ke,a=ki,o=Rn,l=ti,c=Be.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=pi(),this.name="",this.source=new fu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pa:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case Oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pa:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case Oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=tu;Be.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,i=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(p+1)/2,b=(f+1)/2,A=(h+d)/4,w=(u+_)/4,R=(g+m)/4;return y>x&&y>b?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=A/n,s=w/n):x>b?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=R/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=w/s,i=R/s),this.set(n,i,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(d-h)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Bt(this.x,t.x,e.x),this.y=Bt(this.y,t.y,e.y),this.z=Bt(this.z,t.z,e.z),this.w=Bt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Bt(this.x,t,e),this.y=Bt(this.y,t,e),this.z=Bt(this.z,t,e),this.w=Bt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xf extends Wr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new fu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends Xf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pu extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qf extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,T=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const b=Math.sqrt(y),A=Math.atan2(b,f*T);m=Math.sin(m*A)/b,o=Math.sin(o*A)/b}const x=o*T;if(l=l*m+d*x,c=c*m+p*x,h=h*m+g*x,u=u*m+_*x,m===1-o){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Bt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Bt(this.x,t.x,e.x),this.y=Bt(this.y,t.y,e.y),this.z=Bt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Bt(this.x,t,e),this.y=Bt(this.y,t,e),this.z=Bt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ha.copy(this).projectOnVector(t),this.sub(Ha)}reflect(t){return this.sub(Ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Bt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new I,Ec=new ys;class ji{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,wn):wn.fromBufferAttribute(s,a),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(t.matrixWorld),this.union(Cs)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($r),Rs.subVectors(this.max,$r),nr.subVectors(t.a,$r),ir.subVectors(t.b,$r),rr.subVectors(t.c,$r),ii.subVectors(ir,nr),ri.subVectors(rr,ir),wi.subVectors(nr,rr);let e=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-wi.z,wi.y,ii.z,0,-ii.x,ri.z,0,-ri.x,wi.z,0,-wi.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-wi.y,wi.x,0];return!Va(e,nr,ir,rr,Rs)||(e=[1,0,0,0,1,0,0,0,1],!Va(e,nr,ir,rr,Rs))?!1:(Ps.crossVectors(ii,ri),e=[Ps.x,Ps.y,Ps.z],Va(e,nr,ir,rr,Rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hn=[new I,new I,new I,new I,new I,new I,new I,new I],wn=new I,Cs=new ji,nr=new I,ir=new I,rr=new I,ii=new I,ri=new I,wi=new I,$r=new I,Rs=new I,Ps=new I,Ai=new I;function Va(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ai.fromArray(r,s);const o=i.x*Math.abs(Ai.x)+i.y*Math.abs(Ai.y)+i.z*Math.abs(Ai.z),l=t.dot(Ai),c=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Yf=new ji,Kr=new I,Wa=new I;class Xr{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Kr.subVectors(t,this.center);const e=Kr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Kr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Kr.copy(t.center).add(Wa)),this.expandByPoint(Kr.copy(t.center).sub(Wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new I,Xa=new I,Ds=new I,si=new I,qa=new I,Is=new I,Ya=new I;class mu{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Xa.copy(t).add(e).multiplyScalar(.5),Ds.copy(e).sub(t).normalize(),si.copy(this.origin).sub(Xa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ds),o=si.dot(this.direction),l=-si.dot(Ds),c=si.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xa).addScaledVector(Ds,d),p}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,i,s){qa.subVectors(e,t),Is.subVectors(n,t),Ya.crossVectors(qa,Is);let a=this.direction.dot(Ya),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,t);const l=o*this.direction.dot(Is.crossVectors(si,Is));if(l<0)return null;const c=o*this.direction.dot(qa.cross(si));if(c<0||l+c>a)return null;const h=-o*si.dot(Ya);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,i,s,a,o,l,c,h,u,d,p,g,_,m){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,d,p,g,_,m)}set(t,e,n,i,s,a,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/sr.setFromMatrixColumn(t,0).length(),s=1/sr.setFromMatrixColumn(t,1).length(),a=1/sr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($f,t,Kf)}lookAt(t,e,n){const i=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ai.crossVectors(n,rn),ai.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ai.crossVectors(n,rn)),ai.normalize(),Ls.crossVectors(rn,ai),i[0]=ai.x,i[4]=Ls.x,i[8]=rn.x,i[1]=ai.y,i[5]=Ls.y,i[9]=rn.y,i[2]=ai.z,i[6]=Ls.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],T=n[3],y=n[7],x=n[11],b=n[15],A=i[0],w=i[4],R=i[8],v=i[12],M=i[1],P=i[5],O=i[9],N=i[13],z=i[2],q=i[6],H=i[10],Z=i[14],V=i[3],nt=i[7],lt=i[11],_t=i[15];return s[0]=a*A+o*M+l*z+c*V,s[4]=a*w+o*P+l*q+c*nt,s[8]=a*R+o*O+l*H+c*lt,s[12]=a*v+o*N+l*Z+c*_t,s[1]=h*A+u*M+d*z+p*V,s[5]=h*w+u*P+d*q+p*nt,s[9]=h*R+u*O+d*H+p*lt,s[13]=h*v+u*N+d*Z+p*_t,s[2]=g*A+_*M+m*z+f*V,s[6]=g*w+_*P+m*q+f*nt,s[10]=g*R+_*O+m*H+f*lt,s[14]=g*v+_*N+m*Z+f*_t,s[3]=T*A+y*M+x*z+b*V,s[7]=T*w+y*P+x*q+b*nt,s[11]=T*R+y*O+x*H+b*lt,s[15]=T*v+y*N+x*Z+b*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+_*(+e*l*p-e*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+m*(+e*c*u-e*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],T=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,y=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,x=h*_*c-g*u*c+g*o*p-a*_*p-h*o*f+a*u*f,b=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,A=e*T+n*y+i*x+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=T*w,t[1]=(_*d*s-u*m*s-_*i*p+n*m*p+u*i*f-n*d*f)*w,t[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*f+n*l*f)*w,t[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*w,t[4]=y*w,t[5]=(h*m*s-g*d*s+g*i*p-e*m*p-h*i*f+e*d*f)*w,t[6]=(g*l*s-a*m*s-g*i*c+e*m*c+a*i*f-e*l*f)*w,t[7]=(a*d*s-h*l*s+h*i*c-e*d*c-a*i*p+e*l*p)*w,t[8]=x*w,t[9]=(g*u*s-h*_*s-g*n*p+e*_*p+h*n*f-e*u*f)*w,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*f+e*o*f)*w,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*p-e*o*p)*w,t[12]=b*w,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*w,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*w,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,g=s*u,_=a*h,m=a*u,f=o*u,T=l*c,y=l*h,x=l*u,b=n.x,A=n.y,w=n.z;return i[0]=(1-(_+f))*b,i[1]=(p+x)*b,i[2]=(g-y)*b,i[3]=0,i[4]=(p-x)*A,i[5]=(1-(d+f))*A,i[6]=(m+T)*A,i[7]=0,i[8]=(g+y)*w,i[9]=(m-T)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=sr.set(i[0],i[1],i[2]).length();const a=sr.set(i[4],i[5],i[6]).length(),o=sr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],An.copy(this);const c=1/s,h=1/a,u=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,e.setFromRotationMatrix(An),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Zn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(o===Zn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===_a)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Zn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),d=(e+t)*c,p=(n+i)*h;let g,_;if(o===Zn)g=(a+s)*u,_=-2*u;else if(o===_a)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const sr=new I,An=new ne,$f=new I(0,0,0),Kf=new I(1,1,1),ai=new I,Ls=new I,rn=new I,Tc=new ne,bc=new ys;class zn{constructor(t=0,e=0,n=0,i=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Tc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bc.setFromEuler(this),this.setFromQuaternion(bc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class _u{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jf=0;const wc=new I,ar=new ys,Wn=new ne,Us=new I,jr=new I,Zf=new I,Jf=new ys,Ac=new I(1,0,0),Cc=new I(0,1,0),Rc=new I(0,0,1),Pc={type:"added"},Qf={type:"removed"},or={type:"childadded",child:null},$a={type:"childremoved",child:null};class ge extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new I,e=new zn,n=new ys,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Lt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.multiply(ar),this}rotateOnWorldAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.premultiply(ar),this}rotateX(t){return this.rotateOnAxis(Ac,t)}rotateY(t){return this.rotateOnAxis(Cc,t)}rotateZ(t){return this.rotateOnAxis(Rc,t)}translateOnAxis(t,e){return wc.copy(t).applyQuaternion(this.quaternion),this.position.add(wc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ac,t)}translateY(t){return this.translateOnAxis(Cc,t)}translateZ(t){return this.translateOnAxis(Rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Us.copy(t):Us.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(jr,Us,this.up):Wn.lookAt(Us,jr,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),ar.setFromRotationMatrix(Wn),this.quaternion.premultiply(ar.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pc),or.child=t,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qf),$a.child=t,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pc),or.child=t,this.dispatchEvent(or),or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,t,Zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,Jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new I(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new I,Xn=new I,Ka=new I,qn=new I,lr=new I,cr=new I,Dc=new I,ja=new I,Za=new I,Ja=new I,Qa=new ee,to=new ee,eo=new ee;class Sn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Cn.subVectors(t,e),i.cross(Cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Cn.subVectors(i,e),Xn.subVectors(n,e),Ka.subVectors(t,e);const a=Cn.dot(Cn),o=Cn.dot(Xn),l=Cn.dot(Ka),c=Xn.dot(Xn),h=Xn.dot(Ka),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return Qa.setScalar(0),to.setScalar(0),eo.setScalar(0),Qa.fromBufferAttribute(t,e),to.fromBufferAttribute(t,n),eo.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Qa,s.x),a.addScaledVector(to,s.y),a.addScaledVector(eo,s.z),a}static isFrontFacing(t,e,n,i){return Cn.subVectors(n,e),Xn.subVectors(t,e),Cn.cross(Xn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Cn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;lr.subVectors(i,n),cr.subVectors(s,n),ja.subVectors(t,n);const l=lr.dot(ja),c=cr.dot(ja);if(l<=0&&c<=0)return e.copy(n);Za.subVectors(t,i);const h=lr.dot(Za),u=cr.dot(Za);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(lr,a);Ja.subVectors(t,s);const p=lr.dot(Ja),g=cr.dot(Ja);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(cr,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Dc.subVectors(s,i),o=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Dc,o);const f=1/(m+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(lr,a).addScaledVector(cr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function no(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=Nf(t,1),e=Bt(e,0,1),n=Bt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=no(a,s,t+1/3),this.g=no(a,s,t),this.b=no(a,s,t-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(t,e=se){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=se){const n=gu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=se){return Yt.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Bt(Fe.r*255,0,255))*65536+Math.round(Bt(Fe.g*255,0,255))*256+Math.round(Bt(Fe.b*255,0,255))}getHexString(t=se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,i=Fe.g,s=Fe.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=se){Yt.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,i=Fe.b;return t!==se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Fs);const n=za(oi.h,Fs.h,e),i=za(oi.s,Fs.s,e),s=za(oi.l,Fs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new wt;wt.NAMES=gu;let tp=0;class Zi extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=Tr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=Co,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ao&&(n.blendSrc=this.blendSrc),this.blendDst!==Co&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pn extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new I,Ns=new Ut;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hl,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hl&&(t.usage=this.usage),t}}class vu extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xu extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ep=0;const xn=new ne,io=new ge,hr=new I,sn=new ji,Zr=new ji,Ce=new I;class ke extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?xu:vu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Lt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return io.lookAt(t),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ve(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Zr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(sn.min,Zr.min),sn.expandByPoint(Ce),Ce.addVectors(sn.max,Zr.max),sn.expandByPoint(Ce)):(sn.expandByPoint(Zr.min),sn.expandByPoint(Zr.max))}sn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Ce.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ce));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ce.fromBufferAttribute(o,c),l&&(hr.fromBufferAttribute(t,c),Ce.add(hr)),i=Math.max(i,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new I,l[R]=new I;const c=new I,h=new I,u=new I,d=new Ut,p=new Ut,g=new Ut,_=new I,m=new I;function f(R,v,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,v),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[R].add(_),o[v].add(_),o[M].add(_),l[R].add(m),l[v].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let R=0,v=T.length;R<v;++R){const M=T[R],P=M.start,O=M.count;for(let N=P,z=P+O;N<z;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new I,x=new I,b=new I,A=new I;function w(R){b.fromBufferAttribute(i,R),A.copy(b);const v=o[R];y.copy(v),y.sub(b.multiplyScalar(b.dot(v))).normalize(),x.crossVectors(A,v);const P=x.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,P)}for(let R=0,v=T.length;R<v;++R){const M=T[R],P=M.start,O=M.count;for(let N=P,z=P+O;N<z;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Xe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ic=new ne,Ci=new mu,Os=new Xr,Lc=new I,Bs=new I,zs=new I,ks=new I,ro=new I,Gs=new I,Uc=new I,Hs=new I;class Tt extends ge{constructor(t=new ke,e=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Gs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(ro.fromBufferAttribute(u,t),a?Gs.addScaledVector(ro,h):Gs.addScaledVector(ro.sub(e),h))}e.add(Gs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(s),Ci.copy(t.ray).recast(t.near),!(Os.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Os,Lc)===null||Ci.origin.distanceToSquared(Lc)>(t.far-t.near)**2))&&(Ic.copy(s).invert(),Ci.copy(t.ray).applyMatrix4(Ic),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=T,b=y;x<b;x+=3){const A=o.getX(x),w=o.getX(x+1),R=o.getX(x+2);i=Vs(this,f,t,n,c,h,u,A,w,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);i=Vs(this,a,t,n,c,h,u,T,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=T,b=y;x<b;x+=3){const A=x,w=x+1,R=x+2;i=Vs(this,f,t,n,c,h,u,A,w,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=m,y=m+1,x=m+2;i=Vs(this,a,t,n,c,h,u,T,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function np(r,t,e,n,i,s,a,o){let l;if(t.side===je?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===gi,o),l===null)return null;Hs.copy(o),Hs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Hs);return c<e.near||c>e.far?null:{distance:c,point:Hs.clone(),object:r}}function Vs(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Bs),r.getVertexPosition(l,zs),r.getVertexPosition(c,ks);const h=np(r,t,e,n,Bs,zs,ks,Uc);if(h){const u=new I;Sn.getBarycoord(Uc,Bs,zs,ks,u),i&&(h.uv=Sn.getInterpolatedAttribute(i,o,l,c,u,new Ut)),s&&(h.uv1=Sn.getInterpolatedAttribute(s,o,l,c,u,new Ut)),a&&(h.normal=Sn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};Sn.getNormal(Bs,zs,ks,d.normal),h.face=d,h.barycoord=u}return h}class Ee extends ke{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(u,2));function g(_,m,f,T,y,x,b,A,w,R,v){const M=x/w,P=b/R,O=x/2,N=b/2,z=A/2,q=w+1,H=R+1;let Z=0,V=0;const nt=new I;for(let lt=0;lt<H;lt++){const _t=lt*P-N;for(let At=0;At<q;At++){const $t=At*M-O;nt[_]=$t*T,nt[m]=_t*y,nt[f]=z,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[f]=A>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(At/w),u.push(1-lt/R),Z+=1}}for(let lt=0;lt<R;lt++)for(let _t=0;_t<w;_t++){const At=d+_t+q*lt,$t=d+_t+q*(lt+1),X=d+(_t+1)+q*(lt+1),tt=d+(_t+1)+q*lt;l.push(At,$t,tt),l.push($t,X,tt),V+=6}o.addGroup(p,V,v),p+=V,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Or(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ve(r){const t={};for(let e=0;e<r.length;e++){const n=Or(r[e]);for(const i in n)t[i]=n[i]}return t}function ip(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Mu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const rp={clone:Or,merge:Ve};var sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sp,this.fragmentShader=ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=ip(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Su extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new I,Fc=new Ut,Nc=new Ut;class Ye extends Su{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ga*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,Fc,Nc),e.subVectors(Nc,Fc)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ba*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ur=-90,dr=1;class op extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ye(ur,dr,t,e);i.layers=this.layers,this.add(i);const s=new Ye(ur,dr,t,e);s.layers=this.layers,this.add(s);const a=new Ye(ur,dr,t,e);a.layers=this.layers,this.add(a);const o=new Ye(ur,dr,t,e);o.layers=this.layers,this.add(o);const l=new Ye(ur,dr,t,e);l.layers=this.layers,this.add(l);const c=new Ye(ur,dr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_a)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class yu extends Be{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ir,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lp extends $i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new yu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ee(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:fi});s.uniforms.tEquirect.value=e;const a=new Tt(i,s),o=e.minFilter;return e.minFilter===ki&&(e.minFilter=Ke),new op(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}class Nl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=n}clone(){return new Nl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cp extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class hp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hl,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new I;class xa{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ki extends Zi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let fr;const Jr=new I,pr=new I,mr=new I,_r=new Ut,Qr=new Ut,Eu=new ne,Ws=new I,ts=new I,Xs=new I,Oc=new Ut,so=new Ut,Bc=new Ut;class Br extends ge{constructor(t=new Ki){if(super(),this.isSprite=!0,this.type="Sprite",fr===void 0){fr=new ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hp(e,5);fr.setIndex([0,1,2,0,2,3]),fr.setAttribute("position",new xa(n,3,0,!1)),fr.setAttribute("uv",new xa(n,2,3,!1))}this.geometry=fr,this.material=t,this.center=new Ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),Eu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),mr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-mr.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;qs(Ws.set(-.5,-.5,0),mr,a,pr,i,s),qs(ts.set(.5,-.5,0),mr,a,pr,i,s),qs(Xs.set(.5,.5,0),mr,a,pr,i,s),Oc.set(0,0),so.set(1,0),Bc.set(1,1);let o=t.ray.intersectTriangle(Ws,ts,Xs,!1,Jr);if(o===null&&(qs(ts.set(-.5,.5,0),mr,a,pr,i,s),so.set(0,1),o=t.ray.intersectTriangle(Ws,Xs,ts,!1,Jr),o===null))return;const l=t.ray.origin.distanceTo(Jr);l<t.near||l>t.far||e.push({distance:l,point:Jr.clone(),uv:Sn.getInterpolation(Jr,Ws,ts,Xs,Oc,so,Bc,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function qs(r,t,e,n,i,s){_r.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Qr.x=s*_r.x-i*_r.y,Qr.y=i*_r.x+s*_r.y):Qr.copy(_r),r.copy(t),r.x+=Qr.x,r.y+=Qr.y,r.applyMatrix4(Eu)}class up extends Be{constructor(t=null,e=1,n=1,i,s,a,o,l,c=dn,h=dn,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zc extends Xe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const gr=new ne,kc=new ne,Ys=[],Gc=new ji,dp=new ne,es=new Tt,ns=new Xr;class Hc extends Tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,dp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ji),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gr),Gc.copy(t.boundingBox).applyMatrix4(gr),this.boundingBox.union(Gc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gr),ns.copy(t.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(n),t.ray.intersectsSphere(ns)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,gr),kc.multiplyMatrices(n,gr),es.matrixWorld=kc,es.raycast(t,Ys);for(let a=0,o=Ys.length;a<o;a++){const l=Ys[a];l.instanceId=s,l.object=this,e.push(l)}Ys.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new up(new Float32Array(i*this.count),i,this.count,Il,Nn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const ao=new I,fp=new I,pp=new Lt;class Ui{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ao.subVectors(n,e).cross(fp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ao),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pp.getNormalMatrix(t),i=this.coplanarPoint(ao).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Xr,$s=new I;class Ol{constructor(t=new Ui,e=new Ui,n=new Ui,i=new Ui,s=new Ui,a=new Ui){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],T=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-s,d-c,m-p,x-f).normalize(),n[1].setComponents(l+s,d+c,m+p,x+f).normalize(),n[2].setComponents(l+a,d+h,m+g,x+T).normalize(),n[3].setComponents(l-a,d-h,m-g,x-T).normalize(),n[4].setComponents(l-o,d-u,m-_,x-y).normalize(),e===Zn)n[5].setComponents(l+o,d+u,m+_,x+y).normalize();else if(e===_a)n[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if($s.x=i.normal.x>0?t.max.x:t.min.x,$s.y=i.normal.y>0?t.max.y:t.min.y,$s.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint($s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bl extends Zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vc=new ne,ul=new mu,Ks=new Xr,js=new I;class Tu extends ge{constructor(t=new ke,e=new Bl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(i),Ks.radius+=s,t.ray.intersectsSphere(Ks)===!1)return;Vc.copy(i).invert(),ul.copy(t.ray).applyMatrix4(Vc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);js.fromBufferAttribute(u,m),Wc(js,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p;g<_;g++)js.fromBufferAttribute(u,g),Wc(js,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wc(r,t,e,n,i,s,a){const o=ul.distanceSqToPoint(r);if(o<e){const l=new I;ul.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Oe extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ie extends Be{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bu extends Be{constructor(t,e,n,i,s,a,o,l,c,h=br){if(h!==br&&h!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===br&&(n=Yi),n===void 0&&h===Fr&&(n=Ur),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ds extends ke{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new I,h=new Ut;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(o,3)),this.setAttribute("uv",new ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class xi extends ke{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;T(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ve(u,3)),this.setAttribute("normal",new ve(d,3)),this.setAttribute("uv",new ve(p,2));function T(){const x=new I,b=new I;let A=0;const w=(e-t)/n;for(let R=0;R<=s;R++){const v=[],M=R/s,P=M*(e-t)+t;for(let O=0;O<=i;O++){const N=O/i,z=N*l+o,q=Math.sin(z),H=Math.cos(z);b.x=P*q,b.y=-M*n+m,b.z=P*H,u.push(b.x,b.y,b.z),x.set(q,w,H).normalize(),d.push(x.x,x.y,x.z),p.push(N,1-M),v.push(g++)}_.push(v)}for(let R=0;R<i;R++)for(let v=0;v<s;v++){const M=_[v][R],P=_[v+1][R],O=_[v+1][R+1],N=_[v][R+1];(t>0||v!==0)&&(h.push(M,P,N),A+=3),(e>0||v!==s-1)&&(h.push(P,O,N),A+=3)}c.addGroup(f,A,0),f+=A}function y(x){const b=g,A=new Ut,w=new I;let R=0;const v=x===!0?t:e,M=x===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let O=0;O<=i;O++){const z=O/i*l+o,q=Math.cos(z),H=Math.sin(z);w.x=v*H,w.y=m*M,w.z=v*q,u.push(w.x,w.y,w.z),d.push(0,M,0),A.x=q*.5+.5,A.y=H*.5*M+.5,p.push(A.x,A.y),g++}for(let O=0;O<i;O++){const N=b+O,z=P+O;x===!0?h.push(z,z+1,N):h.push(z+1,z,N),R+=3}c.addGroup(f,R,x===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zl extends xi{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new zl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ln extends ke{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const T=f*d-a;for(let y=0;y<c;y++){const x=y*u-s;g.push(x,-T,0),_.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const y=T+c*f,x=T+c*(f+1),b=T+1+c*(f+1),A=T+1+c*f;p.push(y,x,A),p.push(x,b,A)}this.setIndex(p),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.width,t.height,t.widthSegments,t.heightSegments)}}class kl extends ke{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,p=new I,g=new Ut;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const f=s+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let f=0;f<n;f++){const T=f+m,y=T,x=T+n+1,b=T+n+2,A=T+1;o.push(y,x,A),o.push(x,b,A)}}this.setIndex(o),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ar extends ke{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,d=new I,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const T=[],y=f/n;let x=0;f===0&&a===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){const A=b/e;u.x=-t*Math.cos(i+A*s)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(i+A*s)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+x,1-y),T.push(c++)}h.push(T)}for(let f=0;f<n;f++)for(let T=0;T<e;T++){const y=h[f][T+1],x=h[f][T],b=h[f+1][T],A=h[f+1][T+1];(f!==0||a>0)&&p.push(y,x,A),(f!==n-1||l<Math.PI)&&p.push(x,b,A)}this.setIndex(p),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Gl extends ke{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*s,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,T=(i+1)*p+g;a.push(_,m,T),a.push(m,f,T)}this.setIndex(a),this.setAttribute("position",new ve(o,3)),this.setAttribute("normal",new ve(l,3)),this.setAttribute("uv",new ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Jt extends Zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hu,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mp extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _p extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Es extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class gp extends Es{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const oo=new ne,Xc=new I,qc=new I;class Hl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ol,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xc),qc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qc),e.updateMatrixWorld(),oo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vp extends Hl{constructor(){super(new Ye(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ga*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Zs extends Es{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new vp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Yc=new ne,is=new I,lo=new I;class xp extends Hl{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),is.setFromMatrixPosition(t.matrixWorld),n.position.copy(is),lo.copy(n.position),lo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(lo),n.updateMatrixWorld(),i.makeTranslation(-is.x,-is.y,-is.z),Yc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yc)}}class Kn extends Es{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class wu extends Su{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Mp extends Hl{constructor(){super(new wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $c extends Es{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Mp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Sp extends Es{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class yp extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ep{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Kc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Kc(){return performance.now()}function jc(r,t,e,n){const i=Tp(n);switch(e){case ru:return r*t;case au:return r*t;case ou:return r*t*2;case Il:return r*t/i.components*i.byteLength;case Ll:return r*t/i.components*i.byteLength;case lu:return r*t*2/i.components*i.byteLength;case Ul:return r*t*2/i.components*i.byteLength;case su:return r*t*3/i.components*i.byteLength;case Rn:return r*t*4/i.components*i.byteLength;case Fl:return r*t*4/i.components*i.byteLength;case ia:case ra:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case sa:case aa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case zo:case Go:return Math.max(r,16)*Math.max(t,8)/4;case Bo:case ko:return Math.max(r,8)*Math.max(t,8)/2;case Ho:case Vo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Wo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qo:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case $o:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case jo:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case rl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case oa:case sl:case al:return Math.ceil(r/4)*Math.ceil(t/4)*16;case cu:case ol:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ll:case cl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tp(r){switch(r){case ti:case eu:return{byteLength:1,components:1};case us:case nu:case Ss:return{byteLength:2,components:1};case Pl:case Dl:return{byteLength:2,components:4};case Yi:case Rl:case Nn:return{byteLength:4,components:1};case iu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Au(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function bp(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Up=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,am=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Em=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,e_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,l_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,c_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,h_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,f_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,m_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,__=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,x_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,M_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,T_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,I_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,L_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,U_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,W_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,j_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ig=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:wp,alphahash_pars_fragment:Ap,alphamap_fragment:Cp,alphamap_pars_fragment:Rp,alphatest_fragment:Pp,alphatest_pars_fragment:Dp,aomap_fragment:Ip,aomap_pars_fragment:Lp,batching_pars_vertex:Up,batching_vertex:Fp,begin_vertex:Np,beginnormal_vertex:Op,bsdfs:Bp,iridescence_fragment:zp,bumpmap_pars_fragment:kp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:qp,color_pars_vertex:Yp,color_vertex:$p,common:Kp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:Zp,displacementmap_pars_vertex:Jp,displacementmap_vertex:Qp,emissivemap_fragment:tm,emissivemap_pars_fragment:em,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:rm,envmap_common_pars_fragment:sm,envmap_pars_fragment:am,envmap_pars_vertex:om,envmap_physical_pars_fragment:vm,envmap_vertex:lm,fog_vertex:cm,fog_pars_vertex:hm,fog_fragment:um,fog_pars_fragment:dm,gradientmap_pars_fragment:fm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:_m,lights_pars_begin:gm,lights_toon_fragment:xm,lights_toon_pars_fragment:Mm,lights_phong_fragment:Sm,lights_phong_pars_fragment:ym,lights_physical_fragment:Em,lights_physical_pars_fragment:Tm,lights_fragment_begin:bm,lights_fragment_maps:wm,lights_fragment_end:Am,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Dm,map_fragment:Im,map_pars_fragment:Lm,map_particle_fragment:Um,map_particle_pars_fragment:Fm,metalnessmap_fragment:Nm,metalnessmap_pars_fragment:Om,morphinstance_vertex:Bm,morphcolor_vertex:zm,morphnormal_vertex:km,morphtarget_pars_vertex:Gm,morphtarget_vertex:Hm,normal_fragment_begin:Vm,normal_fragment_maps:Wm,normal_pars_fragment:Xm,normal_pars_vertex:qm,normal_vertex:Ym,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:Zm,iridescence_pars_fragment:Jm,opaque_fragment:Qm,packing:t_,premultiplied_alpha_fragment:e_,project_vertex:n_,dithering_fragment:i_,dithering_pars_fragment:r_,roughnessmap_fragment:s_,roughnessmap_pars_fragment:a_,shadowmap_pars_fragment:o_,shadowmap_pars_vertex:l_,shadowmap_vertex:c_,shadowmask_pars_fragment:h_,skinbase_vertex:u_,skinning_pars_vertex:d_,skinning_vertex:f_,skinnormal_vertex:p_,specularmap_fragment:m_,specularmap_pars_fragment:__,tonemapping_fragment:g_,tonemapping_pars_fragment:v_,transmission_fragment:x_,transmission_pars_fragment:M_,uv_pars_fragment:S_,uv_pars_vertex:y_,uv_vertex:E_,worldpos_vertex:T_,background_vert:b_,background_frag:w_,backgroundCube_vert:A_,backgroundCube_frag:C_,cube_vert:R_,cube_frag:P_,depth_vert:D_,depth_frag:I_,distanceRGBA_vert:L_,distanceRGBA_frag:U_,equirect_vert:F_,equirect_frag:N_,linedashed_vert:O_,linedashed_frag:B_,meshbasic_vert:z_,meshbasic_frag:k_,meshlambert_vert:G_,meshlambert_frag:H_,meshmatcap_vert:V_,meshmatcap_frag:W_,meshnormal_vert:X_,meshnormal_frag:q_,meshphong_vert:Y_,meshphong_frag:$_,meshphysical_vert:K_,meshphysical_frag:j_,meshtoon_vert:Z_,meshtoon_frag:J_,points_vert:Q_,points_frag:tg,shadow_vert:eg,shadow_frag:ng,sprite_vert:ig,sprite_frag:rg},it={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},In={basic:{uniforms:Ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new wt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ve([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ve([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new wt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ve([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ve([it.points,it.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ve([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ve([it.common,it.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ve([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ve([it.sprite,it.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Ve([it.common,it.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Ve([it.lights,it.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};In.physical={uniforms:Ve([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Js={r:0,b:0,g:0},Pi=new zn,sg=new ne;function ag(r,t,e,n,i,s,a){const o=new wt(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const b=g(y);b===null?f(o,l):b&&b.isColor&&(f(b,1),x=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,x){const b=g(x);b&&(b.isCubeTexture||b.mapping===Pa)?(h===void 0&&(h=new Tt(new Ee(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Or(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Pi.copy(x.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sg.makeRotationFromEuler(Pi)),h.material.toneMapped=Yt.getTransfer(b.colorSpace)!==Qt,(u!==b||d!==b.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,p=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Tt(new ln(2,2),new vi({name:"BackgroundMaterial",uniforms:Or(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(b.colorSpace)!==Qt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,p=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,x){y.getRGB(Js,Mu(r)),n.buffers.color.setClear(Js.r,Js.g,Js.b,x,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:_,addToRenderList:m,dispose:T}}function og(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(M,P,O,N,z){let q=!1;const H=u(N,O,P);s!==H&&(s=H,c(s.object)),q=p(M,N,O,z),q&&g(M,N,O,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(M,P,O,N),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,P,O){const N=O.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let q=z[P.id];q===void 0&&(q={},z[P.id]=q);let H=q[N];return H===void 0&&(H=d(l()),q[N]=H),H}function d(M){const P=[],O=[],N=[];for(let z=0;z<e;z++)P[z]=0,O[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:N,object:M,attributes:{},index:null}}function p(M,P,O,N){const z=s.attributes,q=P.attributes;let H=0;const Z=O.getAttributes();for(const V in Z)if(Z[V].location>=0){const lt=z[V];let _t=q[V];if(_t===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor)),lt===void 0||lt.attribute!==_t||_t&&lt.data!==_t.data)return!0;H++}return s.attributesNum!==H||s.index!==N}function g(M,P,O,N){const z={},q=P.attributes;let H=0;const Z=O.getAttributes();for(const V in Z)if(Z[V].location>=0){let lt=q[V];lt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor));const _t={};_t.attribute=lt,lt&&lt.data&&(_t.data=lt.data),z[V]=_t,H++}s.attributes=z,s.attributesNum=H,s.index=N}function _(){const M=s.newAttributes;for(let P=0,O=M.length;P<O;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const O=s.newAttributes,N=s.enabledAttributes,z=s.attributeDivisors;O[M]=1,N[M]===0&&(r.enableVertexAttribArray(M),N[M]=1),z[M]!==P&&(r.vertexAttribDivisor(M,P),z[M]=P)}function T(){const M=s.newAttributes,P=s.enabledAttributes;for(let O=0,N=P.length;O<N;O++)P[O]!==M[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function y(M,P,O,N,z,q,H){H===!0?r.vertexAttribIPointer(M,P,O,z,q):r.vertexAttribPointer(M,P,O,N,z,q)}function x(M,P,O,N){_();const z=N.attributes,q=O.getAttributes(),H=P.defaultAttributeValues;for(const Z in q){const V=q[Z];if(V.location>=0){let nt=z[Z];if(nt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),nt!==void 0){const lt=nt.normalized,_t=nt.itemSize,At=t.get(nt);if(At===void 0)continue;const $t=At.buffer,X=At.type,tt=At.bytesPerElement,gt=X===r.INT||X===r.UNSIGNED_INT||nt.gpuType===Rl;if(nt.isInterleavedBufferAttribute){const at=nt.data,bt=at.stride,Pt=nt.offset;if(at.isInstancedInterleavedBuffer){for(let Ot=0;Ot<V.locationSize;Ot++)f(V.location+Ot,at.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ot=0;Ot<V.locationSize;Ot++)m(V.location+Ot);r.bindBuffer(r.ARRAY_BUFFER,$t);for(let Ot=0;Ot<V.locationSize;Ot++)y(V.location+Ot,_t/V.locationSize,X,lt,bt*tt,(Pt+_t/V.locationSize*Ot)*tt,gt)}else{if(nt.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)f(V.location+at,nt.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let at=0;at<V.locationSize;at++)m(V.location+at);r.bindBuffer(r.ARRAY_BUFFER,$t);for(let at=0;at<V.locationSize;at++)y(V.location+at,_t/V.locationSize,X,lt,_t*tt,_t/V.locationSize*at*tt,gt)}}else if(H!==void 0){const lt=H[Z];if(lt!==void 0)switch(lt.length){case 2:r.vertexAttrib2fv(V.location,lt);break;case 3:r.vertexAttrib3fv(V.location,lt);break;case 4:r.vertexAttrib4fv(V.location,lt);break;default:r.vertexAttrib1fv(V.location,lt)}}}}T()}function b(){R();for(const M in n){const P=n[M];for(const O in P){const N=P[O];for(const z in N)h(N[z].object),delete N[z];delete P[O]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const O in P){const N=P[O];for(const z in N)h(N[z].object),delete N[z];delete P[O]}delete n[M.id]}function w(M){for(const P in n){const O=n[P];if(O[M.id]===void 0)continue;const N=O[M.id];for(const z in N)h(N[z].object),delete N[z];delete O[M.id]}}function R(){v(),a=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:v,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function lg(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cg(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Rn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===Ss&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ti&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Nn&&!R)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:b,maxSamples:A}}function hg(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Ui,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const T=s?0:n,y=T*4;let x=f.clippingState||null;l.value=x,x=h(g,d,y,p);for(let b=0;b!==y;++b)x[b]=e[b];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=p;y!==_;++y,x+=4)a.copy(u[y]).applyMatrix4(T,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ug(r){let t=new WeakMap;function e(a,o){return o===fa?a.mapping=Ir:o===No&&(a.mapping=Lr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===fa||o===No)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new lp(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Sr=4,Zc=[.125,.215,.35,.446,.526,.582],Bi=20,co=new wu,Jc=new wt;let ho=null,uo=0,fo=0,po=!1;const Fi=(1+Math.sqrt(5))/2,vr=1/Fi,Qc=[new I(-Fi,vr,0),new I(Fi,vr,0),new I(-vr,0,Fi),new I(vr,0,Fi),new I(0,Fi,-vr),new I(0,Fi,vr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class th{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ho,uo,fo),this._renderer.xr.enabled=po,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ir||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Ss,format:Rn,colorSpace:Nr,depthBuffer:!1},i=eh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(s)),this._blurMaterial=fg(s,t,e)}return i}_compileMaterial(t){const e=new Tt(this._lodPlanes[0],t);this._renderer.compile(e,co)}_sceneToCubeUV(t,e,n,i){const o=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Jc),h.toneMapping=Jn,h.autoClear=!1;const p=new Pn({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new Tt(new Ee,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Jc),_=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):T===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const y=this._cubeSize;Qs(i,T*y,f>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ir||t.mapping===Lr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Tt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,co)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Qc[(i-s-1)%Qc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Tt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Bi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Bi;m>Bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const f=[];let T=0;for(let w=0;w<Bi;++w){const R=w/_,v=Math.exp(-R*R/2);f.push(v),w===0?T+=v:w<m&&(T+=2*v)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[i],b=3*x*(i>y-Sr?i-y+Sr:0),A=4*(this._cubeSize-x);Qs(e,b,A,3*x,2*x),l.setRenderTarget(e),l.render(u,co)}}function dg(r){const t=[],e=[],n=[];let i=r;const s=r-Sr+1+Zc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Sr?l=Zc[a-r+Sr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,T=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,R=A>2?0:-1,v=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];T.set(v,_*g*A),y.set(d,m*g*A);const M=[A,A,A,A,A,A];x.set(M,f*g*A)}const b=new ke;b.setAttribute("position",new Xe(T,_)),b.setAttribute("uv",new Xe(y,m)),b.setAttribute("faceIndex",new Xe(x,f)),t.push(b),i>Sr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function eh(r,t,e){const n=new $i(r,t,e);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function fg(r,t,e){const n=new Float32Array(Bi),i=new I(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function nh(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function ih(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pg(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===fa||l===No,h=l===Ir||l===Lr;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new th(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new th(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function mg(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Mr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _g(r,t,e,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],r.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let y=0,x=T.length;y<x;y+=3){const b=T[y+0],A=T[y+1],w=T[y+2];d.push(b,A,A,w,w,b)}}else if(g!==void 0){const T=g.array;_=g.version;for(let y=0,x=T.length/3-1;y<x;y+=3){const b=y+0,A=y+1,w=y+2;d.push(b,A,A,w,w,b)}}else return;const m=new(du(d)?xu:vu)(d,1);m.version=_;const f=s.get(u);f&&t.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function gg(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){r.drawElements(n,p,s,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,_,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*_[T];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function vg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function xg(r,t,e){const n=new WeakMap,i=new ee;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let v=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=o.attributes.position.count*y,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const A=new Float32Array(x*b*4*u),w=new pu(A,x,b,u);w.type=Nn,w.needsUpdate=!0;const R=y*4;for(let M=0;M<u;M++){const P=m[M],O=f[M],N=T[M],z=x*b*4*M;for(let q=0;q<P.count;q++){const H=q*R;p===!0&&(i.fromBufferAttribute(P,q),A[z+H+0]=i.x,A[z+H+1]=i.y,A[z+H+2]=i.z,A[z+H+3]=0),g===!0&&(i.fromBufferAttribute(O,q),A[z+H+4]=i.x,A[z+H+5]=i.y,A[z+H+6]=i.z,A[z+H+7]=0),_===!0&&(i.fromBufferAttribute(N,q),A[z+H+8]=i.x,A[z+H+9]=i.y,A[z+H+10]=i.z,A[z+H+11]=N.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new Ut(x,b)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Mg(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const Cu=new Be,rh=new bu(1,1),Ru=new pu,Pu=new qf,Du=new yu,sh=[],ah=[],oh=new Float32Array(16),lh=new Float32Array(9),ch=new Float32Array(4);function qr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=sh[i];if(s===void 0&&(s=new Float32Array(i),sh[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function we(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ae(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Da(r,t){let e=ah[t];e===void 0&&(e=new Int32Array(t),ah[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Sg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function yg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2fv(this.addr,t),Ae(e,t)}}function Eg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;r.uniform3fv(this.addr,t),Ae(e,t)}}function Tg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4fv(this.addr,t),Ae(e,t)}}function bg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;ch.set(n),r.uniformMatrix2fv(this.addr,!1,ch),Ae(e,n)}}function wg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;lh.set(n),r.uniformMatrix3fv(this.addr,!1,lh),Ae(e,n)}}function Ag(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;oh.set(n),r.uniformMatrix4fv(this.addr,!1,oh),Ae(e,n)}}function Cg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Rg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2iv(this.addr,t),Ae(e,t)}}function Pg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;r.uniform3iv(this.addr,t),Ae(e,t)}}function Dg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4iv(this.addr,t),Ae(e,t)}}function Ig(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Lg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2uiv(this.addr,t),Ae(e,t)}}function Ug(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;r.uniform3uiv(this.addr,t),Ae(e,t)}}function Fg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4uiv(this.addr,t),Ae(e,t)}}function Ng(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(rh.compareFunction=uu,s=rh):s=Cu,e.setTexture2D(t||s,i)}function Og(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Pu,i)}function Bg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Du,i)}function zg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ru,i)}function kg(r){switch(r){case 5126:return Sg;case 35664:return yg;case 35665:return Eg;case 35666:return Tg;case 35674:return bg;case 35675:return wg;case 35676:return Ag;case 5124:case 35670:return Cg;case 35667:case 35671:return Rg;case 35668:case 35672:return Pg;case 35669:case 35673:return Dg;case 5125:return Ig;case 36294:return Lg;case 36295:return Ug;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return zg}}function Gg(r,t){r.uniform1fv(this.addr,t)}function Hg(r,t){const e=qr(t,this.size,2);r.uniform2fv(this.addr,e)}function Vg(r,t){const e=qr(t,this.size,3);r.uniform3fv(this.addr,e)}function Wg(r,t){const e=qr(t,this.size,4);r.uniform4fv(this.addr,e)}function Xg(r,t){const e=qr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function qg(r,t){const e=qr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Yg(r,t){const e=qr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function $g(r,t){r.uniform1iv(this.addr,t)}function Kg(r,t){r.uniform2iv(this.addr,t)}function jg(r,t){r.uniform3iv(this.addr,t)}function Zg(r,t){r.uniform4iv(this.addr,t)}function Jg(r,t){r.uniform1uiv(this.addr,t)}function Qg(r,t){r.uniform2uiv(this.addr,t)}function t0(r,t){r.uniform3uiv(this.addr,t)}function e0(r,t){r.uniform4uiv(this.addr,t)}function n0(r,t,e){const n=this.cache,i=t.length,s=Da(e,i);we(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Cu,s[a])}function i0(r,t,e){const n=this.cache,i=t.length,s=Da(e,i);we(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Pu,s[a])}function r0(r,t,e){const n=this.cache,i=t.length,s=Da(e,i);we(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Du,s[a])}function s0(r,t,e){const n=this.cache,i=t.length,s=Da(e,i);we(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Ru,s[a])}function a0(r){switch(r){case 5126:return Gg;case 35664:return Hg;case 35665:return Vg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return $g;case 35667:case 35671:return Kg;case 35668:case 35672:return jg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return Qg;case 36295:return t0;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return s0}}class o0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=kg(e.type)}}class l0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a0(e.type)}}class c0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function hh(r,t){r.seq.push(t),r.map[t.id]=t}function h0(r,t,e){const n=r.name,i=n.length;for(mo.lastIndex=0;;){const s=mo.exec(n),a=mo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){hh(e,c===void 0?new o0(o,r,t):new l0(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new c0(o),hh(e,u)),e=u}}}class la{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);h0(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function uh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const u0=37297;let d0=0;function f0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const dh=new Lt;function p0(r){Yt._getMatrix(dh,Yt.workingColorSpace,r);const t=`mat3( ${dh.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(r)){case ma:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function fh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+f0(r.getShaderSource(t),a)}else return i}function m0(r,t){const e=p0(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _0(r,t){let e;switch(t){case vf:e="Linear";break;case xf:e="Reinhard";break;case Mf:e="Cineon";break;case Sf:e="ACESFilmic";break;case Ef:e="AgX";break;case Tf:e="Neutral";break;case yf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ta=new I;function g0(){Yt.getLuminanceCoefficients(ta);const r=ta.x.toFixed(4),t=ta.y.toFixed(4),e=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function x0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function M0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function ss(r){return r!==""}function ph(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const S0=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(r){return r.replace(S0,E0)}const y0=new Map;function E0(r,t){let e=Nt[t];if(e===void 0){const n=y0.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return dl(e)}const T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(r){return r.replace(T0,b0)}function b0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function w0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Jh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===jd?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function A0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ir:case Lr:t="ENVMAP_TYPE_CUBE";break;case Pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function C0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Lr:t="ENVMAP_MODE_REFRACTION";break}return t}function R0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qh:t="ENVMAP_BLENDING_MULTIPLY";break;case _f:t="ENVMAP_BLENDING_MIX";break;case gf:t="ENVMAP_BLENDING_ADD";break}return t}function P0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function D0(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=w0(e),c=A0(e),h=C0(e),u=R0(e),d=P0(e),p=v0(e),g=x0(s),_=i.createProgram();let m,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ss).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ss).join(`
`),f.length>0&&(f+=`
`)):(m=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),f=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?_0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,m0("linearToOutputTexel",e.outputColorSpace),g0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),a=dl(a),a=ph(a,e),a=mh(a,e),o=dl(o),o=ph(o,e),o=mh(o,e),a=_h(a),o=_h(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=T+m+a,x=T+f+o,b=uh(i,i.VERTEX_SHADER,y),A=uh(i,i.FRAGMENT_SHADER,x);i.attachShader(_,b),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(P){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(b).trim(),z=i.getShaderInfoLog(A).trim();let q=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,b,A);else{const Z=fh(i,b,"vertex"),V=fh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+Z+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||z==="")&&(H=!1);H&&(P.diagnostics={runnable:q,programLog:O,vertexShader:{log:N,prefix:m},fragmentShader:{log:z,prefix:f}})}i.deleteShader(b),i.deleteShader(A),R=new la(i,_),v=M0(i,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,u0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}let I0=0;class L0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new U0(t),e.set(t,n)),n}}class U0{constructor(t){this.id=I0++,this.code=t,this.usedTimes=0}}function F0(r,t,e,n,i,s,a){const o=new _u,l=new L0,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,M,P,O,N){const z=O.fog,q=N.geometry,H=v.isMeshStandardMaterial?O.environment:null,Z=(v.isMeshStandardMaterial?e:t).get(v.envMap||H),V=Z&&Z.mapping===Pa?Z.image.height:null,nt=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const lt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_t=lt!==void 0?lt.length:0;let At=0;q.morphAttributes.position!==void 0&&(At=1),q.morphAttributes.normal!==void 0&&(At=2),q.morphAttributes.color!==void 0&&(At=3);let $t,X,tt,gt;if(nt){const Zt=In[nt];$t=Zt.vertexShader,X=Zt.fragmentShader}else $t=v.vertexShader,X=v.fragmentShader,l.update(v),tt=l.getVertexShaderID(v),gt=l.getFragmentShaderID(v);const at=r.getRenderTarget(),bt=r.state.buffers.depth.getReversed(),Pt=N.isInstancedMesh===!0,Ot=N.isBatchedMesh===!0,he=!!v.map,Vt=!!v.matcap,xe=!!Z,D=!!v.aoMap,_n=!!v.lightMap,kt=!!v.bumpMap,Gt=!!v.normalMap,Mt=!!v.displacementMap,oe=!!v.emissiveMap,xt=!!v.metalnessMap,C=!!v.roughnessMap,S=v.anisotropy>0,B=v.clearcoat>0,K=v.dispersion>0,J=v.iridescence>0,Y=v.sheen>0,vt=v.transmission>0,ot=S&&!!v.anisotropyMap,dt=B&&!!v.clearcoatMap,Wt=B&&!!v.clearcoatNormalMap,et=B&&!!v.clearcoatRoughnessMap,ft=J&&!!v.iridescenceMap,Et=J&&!!v.iridescenceThicknessMap,Ct=Y&&!!v.sheenColorMap,pt=Y&&!!v.sheenRoughnessMap,Ht=!!v.specularMap,Ft=!!v.specularColorMap,ae=!!v.specularIntensityMap,L=vt&&!!v.transmissionMap,rt=vt&&!!v.thicknessMap,W=!!v.gradientMap,j=!!v.alphaMap,ht=v.alphaTest>0,ct=!!v.alphaHash,It=!!v.extensions;let pe=Jn;v.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(pe=r.toneMapping);const Le={shaderID:nt,shaderType:v.type,shaderName:v.name,vertexShader:$t,fragmentShader:X,defines:v.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&N._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&N.instanceColor!==null,instancingMorph:Pt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?r.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Nr,alphaToCoverage:!!v.alphaToCoverage,map:he,matcap:Vt,envMap:xe,envMapMode:xe&&Z.mapping,envMapCubeUVHeight:V,aoMap:D,lightMap:_n,bumpMap:kt,normalMap:Gt,displacementMap:d&&Mt,emissiveMap:oe,normalMapObjectSpace:Gt&&v.normalMapType===Cf,normalMapTangentSpace:Gt&&v.normalMapType===hu,metalnessMap:xt,roughnessMap:C,anisotropy:S,anisotropyMap:ot,clearcoat:B,clearcoatMap:dt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:et,dispersion:K,iridescence:J,iridescenceMap:ft,iridescenceThicknessMap:Et,sheen:Y,sheenColorMap:Ct,sheenRoughnessMap:pt,specularMap:Ht,specularColorMap:Ft,specularIntensityMap:ae,transmission:vt,transmissionMap:L,thicknessMap:rt,gradientMap:W,opaque:v.transparent===!1&&v.blending===Tr&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:ht,alphaHash:ct,combine:v.combine,mapUv:he&&_(v.map.channel),aoMapUv:D&&_(v.aoMap.channel),lightMapUv:_n&&_(v.lightMap.channel),bumpMapUv:kt&&_(v.bumpMap.channel),normalMapUv:Gt&&_(v.normalMap.channel),displacementMapUv:Mt&&_(v.displacementMap.channel),emissiveMapUv:oe&&_(v.emissiveMap.channel),metalnessMapUv:xt&&_(v.metalnessMap.channel),roughnessMapUv:C&&_(v.roughnessMap.channel),anisotropyMapUv:ot&&_(v.anisotropyMap.channel),clearcoatMapUv:dt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(v.sheenRoughnessMap.channel),specularMapUv:Ht&&_(v.specularMap.channel),specularColorMapUv:Ft&&_(v.specularColorMap.channel),specularIntensityMapUv:ae&&_(v.specularIntensityMap.channel),transmissionMapUv:L&&_(v.transmissionMap.channel),thicknessMapUv:rt&&_(v.thicknessMap.channel),alphaMapUv:j&&_(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Gt||S),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(he||j),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:At,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:pe,decodeVideoTexture:he&&v.map.isVideoTexture===!0&&Yt.getTransfer(v.map.colorSpace)===Qt,decodeVideoTextureEmissive:oe&&v.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(v.emissiveMap.colorSpace)===Qt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===on,flipSided:v.side===je,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:It&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&v.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function f(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)M.push(P),M.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(T(M,v),y(M,v),M.push(r.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function T(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function y(v,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),v.push(o.mask)}function x(v){const M=g[v.type];let P;if(M){const O=In[M];P=rp.clone(O.uniforms)}else P=v.uniforms;return P}function b(v,M){let P;for(let O=0,N=h.length;O<N;O++){const z=h[O];if(z.cacheKey===M){P=z,++P.usedTimes;break}}return P===void 0&&(P=new D0(r,M,v,s),h.push(P)),P}function A(v){if(--v.usedTimes===0){const M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),v.destroy()}}function w(v){l.remove(v)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:b,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:R}}function N0(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function O0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function vh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function xh(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,p,g,_,m){let f=r[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||O0),n.length>1&&n.sort(d||vh),i.length>1&&i.sort(d||vh)}function h(){for(let u=t,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function B0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new xh,r.set(n,[a])):i>=s.length?(a=new xh,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function z0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new wt};break;case"SpotLight":e={position:new I,direction:new I,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function k0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let G0=0;function H0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function V0(r){const t=new z0,e=k0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new ne,a=new ne;function o(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,T=0,y=0,x=0,b=0,A=0,w=0;c.sort(H0);for(let v=0,M=c.length;v<M;v++){const P=c[v],O=P.color,N=P.intensity,z=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*N,u+=O.g*N,d+=O.b*N;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],N);w++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,V=e.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=P.shadow.matrix,T++}n.directional[p]=H,p++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(O).multiplyScalar(N),H.distance=z,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[_]=H;const Z=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,Z.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=Z.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=q,x++}_++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(O).multiplyScalar(N),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const Z=P.shadow,V=e.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(N),H.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[f]=H,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==T||R.numPointShadows!==y||R.numSpotShadows!==x||R.numSpotMaps!==b||R.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+b-A,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=T,R.numPointShadows=y,R.numSpotShadows=x,R.numSpotMaps=b,R.numLightProbes=w,n.version=G0++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const y=c[f];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Mh(r){const t=new V0(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function W0(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Mh(r),t.set(i,[o])):s>=a.length?(o=new Mh(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const X0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Y0(r,t,e){let n=new Ol;const i=new Ut,s=new Ut,a=new ee,o=new mp({depthPacking:Af}),l=new _p,c={},h=e.maxTextureSize,u={[gi]:je,[je]:gi,[on]:on},d=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:X0,fragmentShader:q0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ke;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jh;let f=this.type;this.render=function(A,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const v=r.getRenderTarget(),M=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),O=r.state;O.setBlending(fi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=f!==Yn&&this.type===Yn,z=f===Yn&&this.type!==Yn;for(let q=0,H=A.length;q<H;q++){const Z=A[q],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const nt=V.getFrameExtents();if(i.multiply(nt),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/nt.x),i.x=s.x*nt.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/nt.y),i.y=s.y*nt.y,V.mapSize.y=s.y)),V.map===null||N===!0||z===!0){const _t=this.type!==Yn?{minFilter:dn,magFilter:dn}:{};V.map!==null&&V.map.dispose(),V.map=new $i(i.x,i.y,_t),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const lt=V.getViewportCount();for(let _t=0;_t<lt;_t++){const At=V.getViewport(_t);a.set(s.x*At.x,s.y*At.y,s.x*At.z,s.y*At.w),O.viewport(a),V.updateMatrices(Z,_t),n=V.getFrustum(),x(w,R,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Yn&&T(V,R),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(v,M,P)};function T(A,w){const R=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new $i(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,R,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,R,p,_,null)}function y(A,w,R,v){let M=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=M.uuid,N=w.uuid;let z=c[O];z===void 0&&(z={},c[O]=z);let q=z[N];q===void 0&&(q=M.clone(),z[N]=q,w.addEventListener("dispose",b)),M=q}if(M.visible=w.visible,M.wireframe=w.wireframe,v===Yn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=r.properties.get(M);O.light=R}return M}function x(A,w,R,v,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Yn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const N=t.update(A),z=A.material;if(Array.isArray(z)){const q=N.groups;for(let H=0,Z=q.length;H<Z;H++){const V=q[H],nt=z[V.materialIndex];if(nt&&nt.visible){const lt=y(A,nt,v,M);A.onBeforeShadow(r,A,w,R,N,lt,V),r.renderBufferDirect(R,null,N,lt,A,V),A.onAfterShadow(r,A,w,R,N,lt,V)}}}else if(z.visible){const q=y(A,z,v,M);A.onBeforeShadow(r,A,w,R,N,q,null),r.renderBufferDirect(R,null,N,q,A,null),A.onAfterShadow(r,A,w,R,N,q,null)}}const O=A.children;for(let N=0,z=O.length;N<z;N++)x(O[N],w,R,v,M)}function b(A){A.target.removeEventListener("dispose",b);for(const R in c){const v=c[R],M=A.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const $0={[Ro]:Po,[Do]:Uo,[Io]:Fo,[Dr]:Lo,[Po]:Ro,[Uo]:Do,[Fo]:Io,[Lo]:Dr};function K0(r,t){function e(){let L=!1;const rt=new ee;let W=null;const j=new ee(0,0,0,0);return{setMask:function(ht){W!==ht&&!L&&(r.colorMask(ht,ht,ht,ht),W=ht)},setLocked:function(ht){L=ht},setClear:function(ht,ct,It,pe,Le){Le===!0&&(ht*=pe,ct*=pe,It*=pe),rt.set(ht,ct,It,pe),j.equals(rt)===!1&&(r.clearColor(ht,ct,It,pe),j.copy(rt))},reset:function(){L=!1,W=null,j.set(-1,0,0,0)}}}function n(){let L=!1,rt=!1,W=null,j=null,ht=null;return{setReversed:function(ct){if(rt!==ct){const It=t.get("EXT_clip_control");rt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const pe=ht;ht=null,this.setClear(pe)}rt=ct},getReversed:function(){return rt},setTest:function(ct){ct?at(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(ct){W!==ct&&!L&&(r.depthMask(ct),W=ct)},setFunc:function(ct){if(rt&&(ct=$0[ct]),j!==ct){switch(ct){case Ro:r.depthFunc(r.NEVER);break;case Po:r.depthFunc(r.ALWAYS);break;case Do:r.depthFunc(r.LESS);break;case Dr:r.depthFunc(r.LEQUAL);break;case Io:r.depthFunc(r.EQUAL);break;case Lo:r.depthFunc(r.GEQUAL);break;case Uo:r.depthFunc(r.GREATER);break;case Fo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=ct}},setLocked:function(ct){L=ct},setClear:function(ct){ht!==ct&&(rt&&(ct=1-ct),r.clearDepth(ct),ht=ct)},reset:function(){L=!1,W=null,j=null,ht=null,rt=!1}}}function i(){let L=!1,rt=null,W=null,j=null,ht=null,ct=null,It=null,pe=null,Le=null;return{setTest:function(Zt){L||(Zt?at(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(Zt){rt!==Zt&&!L&&(r.stencilMask(Zt),rt=Zt)},setFunc:function(Zt,Tn,Gn){(W!==Zt||j!==Tn||ht!==Gn)&&(r.stencilFunc(Zt,Tn,Gn),W=Zt,j=Tn,ht=Gn)},setOp:function(Zt,Tn,Gn){(ct!==Zt||It!==Tn||pe!==Gn)&&(r.stencilOp(Zt,Tn,Gn),ct=Zt,It=Tn,pe=Gn)},setLocked:function(Zt){L=Zt},setClear:function(Zt){Le!==Zt&&(r.clearStencil(Zt),Le=Zt)},reset:function(){L=!1,rt=null,W=null,j=null,ht=null,ct=null,It=null,pe=null,Le=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,y=null,x=null,b=null,A=null,w=new wt(0,0,0),R=0,v=!1,M=null,P=null,O=null,N=null,z=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=Z>=2);let nt=null,lt={};const _t=r.getParameter(r.SCISSOR_BOX),At=r.getParameter(r.VIEWPORT),$t=new ee().fromArray(_t),X=new ee().fromArray(At);function tt(L,rt,W,j){const ht=new Uint8Array(4),ct=r.createTexture();r.bindTexture(L,ct),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let It=0;It<W;It++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(rt,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,ht):r.texImage2D(rt+It,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ht);return ct}const gt={};gt[r.TEXTURE_2D]=tt(r.TEXTURE_2D,r.TEXTURE_2D,1),gt[r.TEXTURE_CUBE_MAP]=tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[r.TEXTURE_2D_ARRAY]=tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),gt[r.TEXTURE_3D]=tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(r.DEPTH_TEST),a.setFunc(Dr),kt(!1),Gt(mc),at(r.CULL_FACE),D(fi);function at(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function bt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Pt(L,rt){return u[L]!==rt?(r.bindFramebuffer(L,rt),u[L]=rt,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=rt),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=rt),!0):!1}function Ot(L,rt){let W=p,j=!1;if(L){W=d.get(rt),W===void 0&&(W=[],d.set(rt,W));const ht=L.textures;if(W.length!==ht.length||W[0]!==r.COLOR_ATTACHMENT0){for(let ct=0,It=ht.length;ct<It;ct++)W[ct]=r.COLOR_ATTACHMENT0+ct;W.length=ht.length,j=!0}}else W[0]!==r.BACK&&(W[0]=r.BACK,j=!0);j&&r.drawBuffers(W)}function he(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const Vt={[Oi]:r.FUNC_ADD,[Jd]:r.FUNC_SUBTRACT,[Qd]:r.FUNC_REVERSE_SUBTRACT};Vt[tf]=r.MIN,Vt[ef]=r.MAX;const xe={[nf]:r.ZERO,[rf]:r.ONE,[sf]:r.SRC_COLOR,[Ao]:r.SRC_ALPHA,[uf]:r.SRC_ALPHA_SATURATE,[cf]:r.DST_COLOR,[of]:r.DST_ALPHA,[af]:r.ONE_MINUS_SRC_COLOR,[Co]:r.ONE_MINUS_SRC_ALPHA,[hf]:r.ONE_MINUS_DST_COLOR,[lf]:r.ONE_MINUS_DST_ALPHA,[df]:r.CONSTANT_COLOR,[ff]:r.ONE_MINUS_CONSTANT_COLOR,[pf]:r.CONSTANT_ALPHA,[mf]:r.ONE_MINUS_CONSTANT_ALPHA};function D(L,rt,W,j,ht,ct,It,pe,Le,Zt){if(L===fi){_===!0&&(bt(r.BLEND),_=!1);return}if(_===!1&&(at(r.BLEND),_=!0),L!==Zd){if(L!==m||Zt!==v){if((f!==Oi||x!==Oi)&&(r.blendEquation(r.FUNC_ADD),f=Oi,x=Oi),Zt)switch(L){case Tr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bn:r.blendFunc(r.ONE,r.ONE);break;case _c:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Tr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case _c:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,y=null,b=null,A=null,w.set(0,0,0),R=0,m=L,v=Zt}return}ht=ht||rt,ct=ct||W,It=It||j,(rt!==f||ht!==x)&&(r.blendEquationSeparate(Vt[rt],Vt[ht]),f=rt,x=ht),(W!==T||j!==y||ct!==b||It!==A)&&(r.blendFuncSeparate(xe[W],xe[j],xe[ct],xe[It]),T=W,y=j,b=ct,A=It),(pe.equals(w)===!1||Le!==R)&&(r.blendColor(pe.r,pe.g,pe.b,Le),w.copy(pe),R=Le),m=L,v=!1}function _n(L,rt){L.side===on?bt(r.CULL_FACE):at(r.CULL_FACE);let W=L.side===je;rt&&(W=!W),kt(W),L.blending===Tr&&L.transparent===!1?D(fi):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const j=L.stencilWrite;o.setTest(j),j&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),oe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?at(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function kt(L){M!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),M=L)}function Gt(L){L!==$d?(at(r.CULL_FACE),L!==P&&(L===mc?r.cullFace(r.BACK):L===Kd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),P=L}function Mt(L){L!==O&&(H&&r.lineWidth(L),O=L)}function oe(L,rt,W){L?(at(r.POLYGON_OFFSET_FILL),(N!==rt||z!==W)&&(r.polygonOffset(rt,W),N=rt,z=W)):bt(r.POLYGON_OFFSET_FILL)}function xt(L){L?at(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function C(L){L===void 0&&(L=r.TEXTURE0+q-1),nt!==L&&(r.activeTexture(L),nt=L)}function S(L,rt,W){W===void 0&&(nt===null?W=r.TEXTURE0+q-1:W=nt);let j=lt[W];j===void 0&&(j={type:void 0,texture:void 0},lt[W]=j),(j.type!==L||j.texture!==rt)&&(nt!==W&&(r.activeTexture(W),nt=W),r.bindTexture(L,rt||gt[L]),j.type=L,j.texture=rt)}function B(){const L=lt[nt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(L){$t.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),$t.copy(L))}function pt(L){X.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function Ht(L,rt){let W=c.get(rt);W===void 0&&(W=new WeakMap,c.set(rt,W));let j=W.get(L);j===void 0&&(j=r.getUniformBlockIndex(rt,L.name),W.set(L,j))}function Ft(L,rt){const j=c.get(rt).get(L);l.get(rt)!==j&&(r.uniformBlockBinding(rt,j,L.__bindingPointIndex),l.set(rt,j))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},nt=null,lt={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,y=null,x=null,b=null,A=null,w=new wt(0,0,0),R=0,v=!1,M=null,P=null,O=null,N=null,z=null,$t.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:at,disable:bt,bindFramebuffer:Pt,drawBuffers:Ot,useProgram:he,setBlending:D,setMaterial:_n,setFlipSided:kt,setCullFace:Gt,setLineWidth:Mt,setPolygonOffset:oe,setScissorTest:xt,activeTexture:C,bindTexture:S,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:ft,texImage3D:Et,updateUBOMapping:Ht,uniformBlockBinding:Ft,texStorage2D:Wt,texStorage3D:et,texSubImage2D:Y,texSubImage3D:vt,compressedTexSubImage2D:ot,compressedTexSubImage3D:dt,scissor:Ct,viewport:pt,reset:ae}}function j0(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):va("canvas")}function _(C,S,B){let K=1;const J=xt(C);if((J.width>B||J.height>B)&&(K=B/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(K*J.width),vt=Math.floor(K*J.height);u===void 0&&(u=g(Y,vt));const ot=S?g(Y,vt):u;return ot.width=Y,ot.height=vt,ot.getContext("2d").drawImage(C,0,0,Y,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+vt+")."),ot}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){r.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(C,S,B,K,J=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=S;if(S===r.RED&&(B===r.FLOAT&&(Y=r.R32F),B===r.HALF_FLOAT&&(Y=r.R16F),B===r.UNSIGNED_BYTE&&(Y=r.R8)),S===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(Y=r.R8UI),B===r.UNSIGNED_SHORT&&(Y=r.R16UI),B===r.UNSIGNED_INT&&(Y=r.R32UI),B===r.BYTE&&(Y=r.R8I),B===r.SHORT&&(Y=r.R16I),B===r.INT&&(Y=r.R32I)),S===r.RG&&(B===r.FLOAT&&(Y=r.RG32F),B===r.HALF_FLOAT&&(Y=r.RG16F),B===r.UNSIGNED_BYTE&&(Y=r.RG8)),S===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(Y=r.RG8UI),B===r.UNSIGNED_SHORT&&(Y=r.RG16UI),B===r.UNSIGNED_INT&&(Y=r.RG32UI),B===r.BYTE&&(Y=r.RG8I),B===r.SHORT&&(Y=r.RG16I),B===r.INT&&(Y=r.RG32I)),S===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),B===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),B===r.UNSIGNED_INT&&(Y=r.RGB32UI),B===r.BYTE&&(Y=r.RGB8I),B===r.SHORT&&(Y=r.RGB16I),B===r.INT&&(Y=r.RGB32I)),S===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),B===r.UNSIGNED_INT&&(Y=r.RGBA32UI),B===r.BYTE&&(Y=r.RGBA8I),B===r.SHORT&&(Y=r.RGBA16I),B===r.INT&&(Y=r.RGBA32I)),S===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),S===r.RGBA){const vt=J?ma:Yt.getTransfer(K);B===r.FLOAT&&(Y=r.RGBA32F),B===r.HALF_FLOAT&&(Y=r.RGBA16F),B===r.UNSIGNED_BYTE&&(Y=vt===Qt?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(C,S){let B;return C?S===null||S===Yi||S===Ur?B=r.DEPTH24_STENCIL8:S===Nn?B=r.DEPTH32F_STENCIL8:S===us&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Yi||S===Ur?B=r.DEPTH_COMPONENT24:S===Nn?B=r.DEPTH_COMPONENT32F:S===us&&(B=r.DEPTH_COMPONENT16),B}function b(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==dn&&C.minFilter!==Ke?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){const S=C.target;S.removeEventListener("dispose",A),R(S),S.isVideoTexture&&h.delete(S)}function w(C){const S=C.target;S.removeEventListener("dispose",w),M(S)}function R(C){const S=n.get(C);if(S.__webglInit===void 0)return;const B=C.source,K=d.get(B);if(K){const J=K[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&v(C),Object.keys(K).length===0&&d.delete(B)}n.remove(C)}function v(C){const S=n.get(C);r.deleteTexture(S.__webglTexture);const B=C.source,K=d.get(B);delete K[S.__cacheKey],a.memory.textures--}function M(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let J=0;J<S.__webglFramebuffer[K].length;J++)r.deleteFramebuffer(S.__webglFramebuffer[K][J]);else r.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)r.deleteFramebuffer(S.__webglFramebuffer[K]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=C.textures;for(let K=0,J=B.length;K<J;K++){const Y=n.get(B[K]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(B[K])}n.remove(C)}let P=0;function O(){P=0}function N(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function z(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function q(C,S){const B=n.get(C);if(C.isVideoTexture&&Mt(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,C,S);return}}e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+S)}function H(C,S){const B=n.get(C);if(C.version>0&&B.__version!==C.version){X(B,C,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+S)}function Z(C,S){const B=n.get(C);if(C.version>0&&B.__version!==C.version){X(B,C,S);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+S)}function V(C,S){const B=n.get(C);if(C.version>0&&B.__version!==C.version){tt(B,C,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+S)}const nt={[pa]:r.REPEAT,[zi]:r.CLAMP_TO_EDGE,[Oo]:r.MIRRORED_REPEAT},lt={[dn]:r.NEAREST,[bf]:r.NEAREST_MIPMAP_NEAREST,[As]:r.NEAREST_MIPMAP_LINEAR,[Ke]:r.LINEAR,[Oa]:r.LINEAR_MIPMAP_NEAREST,[ki]:r.LINEAR_MIPMAP_LINEAR},_t={[Rf]:r.NEVER,[Ff]:r.ALWAYS,[Pf]:r.LESS,[uu]:r.LEQUAL,[Df]:r.EQUAL,[Uf]:r.GEQUAL,[If]:r.GREATER,[Lf]:r.NOTEQUAL};function At(C,S){if(S.type===Nn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ke||S.magFilter===Oa||S.magFilter===As||S.magFilter===ki||S.minFilter===Ke||S.minFilter===Oa||S.minFilter===As||S.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,nt[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,nt[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,nt[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,lt[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,lt[S.minFilter]),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===dn||S.minFilter!==As&&S.minFilter!==ki||S.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function $t(C,S){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));const K=S.source;let J=d.get(K);J===void 0&&(J={},d.set(K,J));const Y=z(S);if(Y!==C.__cacheKey){J[Y]===void 0&&(J[Y]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[Y].usedTimes++;const vt=J[C.__cacheKey];vt!==void 0&&(J[C.__cacheKey].usedTimes--,vt.usedTimes===0&&v(S)),C.__cacheKey=Y,C.__webglTexture=J[Y].texture}return B}function X(C,S,B){let K=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=r.TEXTURE_3D);const J=$t(C,S),Y=S.source;e.bindTexture(K,C.__webglTexture,r.TEXTURE0+B);const vt=n.get(Y);if(Y.version!==vt.__version||J===!0){e.activeTexture(r.TEXTURE0+B);const ot=Yt.getPrimaries(Yt.workingColorSpace),dt=S.colorSpace===ci?null:Yt.getPrimaries(S.colorSpace),Wt=S.colorSpace===ci||ot===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let et=_(S.image,!1,i.maxTextureSize);et=oe(S,et);const ft=s.convert(S.format,S.colorSpace),Et=s.convert(S.type);let Ct=y(S.internalFormat,ft,Et,S.colorSpace,S.isVideoTexture);At(K,S);let pt;const Ht=S.mipmaps,Ft=S.isVideoTexture!==!0,ae=vt.__version===void 0||J===!0,L=Y.dataReady,rt=b(S,et);if(S.isDepthTexture)Ct=x(S.format===Fr,S.type),ae&&(Ft?e.texStorage2D(r.TEXTURE_2D,1,Ct,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,Ct,et.width,et.height,0,ft,Et,null));else if(S.isDataTexture)if(Ht.length>0){Ft&&ae&&e.texStorage2D(r.TEXTURE_2D,rt,Ct,Ht[0].width,Ht[0].height);for(let W=0,j=Ht.length;W<j;W++)pt=Ht[W],Ft?L&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,pt.width,pt.height,ft,Et,pt.data):e.texImage2D(r.TEXTURE_2D,W,Ct,pt.width,pt.height,0,ft,Et,pt.data);S.generateMipmaps=!1}else Ft?(ae&&e.texStorage2D(r.TEXTURE_2D,rt,Ct,et.width,et.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,et.width,et.height,ft,Et,et.data)):e.texImage2D(r.TEXTURE_2D,0,Ct,et.width,et.height,0,ft,Et,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ft&&ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,rt,Ct,Ht[0].width,Ht[0].height,et.depth);for(let W=0,j=Ht.length;W<j;W++)if(pt=Ht[W],S.format!==Rn)if(ft!==null)if(Ft){if(L)if(S.layerUpdates.size>0){const ht=jc(pt.width,pt.height,S.format,S.type);for(const ct of S.layerUpdates){const It=pt.data.subarray(ct*ht/pt.data.BYTES_PER_ELEMENT,(ct+1)*ht/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,ct,pt.width,pt.height,1,ft,It)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,pt.width,pt.height,et.depth,ft,pt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,Ct,pt.width,pt.height,et.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,pt.width,pt.height,et.depth,ft,Et,pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,W,Ct,pt.width,pt.height,et.depth,0,ft,Et,pt.data)}else{Ft&&ae&&e.texStorage2D(r.TEXTURE_2D,rt,Ct,Ht[0].width,Ht[0].height);for(let W=0,j=Ht.length;W<j;W++)pt=Ht[W],S.format!==Rn?ft!==null?Ft?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(r.TEXTURE_2D,W,Ct,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?L&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,pt.width,pt.height,ft,Et,pt.data):e.texImage2D(r.TEXTURE_2D,W,Ct,pt.width,pt.height,0,ft,Et,pt.data)}else if(S.isDataArrayTexture)if(Ft){if(ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,rt,Ct,et.width,et.height,et.depth),L)if(S.layerUpdates.size>0){const W=jc(et.width,et.height,S.format,S.type);for(const j of S.layerUpdates){const ht=et.data.subarray(j*W/et.data.BYTES_PER_ELEMENT,(j+1)*W/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,et.width,et.height,1,ft,Et,ht)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ft,Et,et.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ct,et.width,et.height,et.depth,0,ft,Et,et.data);else if(S.isData3DTexture)Ft?(ae&&e.texStorage3D(r.TEXTURE_3D,rt,Ct,et.width,et.height,et.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ft,Et,et.data)):e.texImage3D(r.TEXTURE_3D,0,Ct,et.width,et.height,et.depth,0,ft,Et,et.data);else if(S.isFramebufferTexture){if(ae)if(Ft)e.texStorage2D(r.TEXTURE_2D,rt,Ct,et.width,et.height);else{let W=et.width,j=et.height;for(let ht=0;ht<rt;ht++)e.texImage2D(r.TEXTURE_2D,ht,Ct,W,j,0,ft,Et,null),W>>=1,j>>=1}}else if(Ht.length>0){if(Ft&&ae){const W=xt(Ht[0]);e.texStorage2D(r.TEXTURE_2D,rt,Ct,W.width,W.height)}for(let W=0,j=Ht.length;W<j;W++)pt=Ht[W],Ft?L&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,ft,Et,pt):e.texImage2D(r.TEXTURE_2D,W,Ct,ft,Et,pt);S.generateMipmaps=!1}else if(Ft){if(ae){const W=xt(et);e.texStorage2D(r.TEXTURE_2D,rt,Ct,W.width,W.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ft,Et,et)}else e.texImage2D(r.TEXTURE_2D,0,Ct,ft,Et,et);m(S)&&f(K),vt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function tt(C,S,B){if(S.image.length!==6)return;const K=$t(C,S),J=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+B);const Y=n.get(J);if(J.version!==Y.__version||K===!0){e.activeTexture(r.TEXTURE0+B);const vt=Yt.getPrimaries(Yt.workingColorSpace),ot=S.colorSpace===ci?null:Yt.getPrimaries(S.colorSpace),dt=S.colorSpace===ci||vt===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Wt=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,ft=[];for(let j=0;j<6;j++)!Wt&&!et?ft[j]=_(S.image[j],!0,i.maxCubemapSize):ft[j]=et?S.image[j].image:S.image[j],ft[j]=oe(S,ft[j]);const Et=ft[0],Ct=s.convert(S.format,S.colorSpace),pt=s.convert(S.type),Ht=y(S.internalFormat,Ct,pt,S.colorSpace),Ft=S.isVideoTexture!==!0,ae=Y.__version===void 0||K===!0,L=J.dataReady;let rt=b(S,Et);At(r.TEXTURE_CUBE_MAP,S);let W;if(Wt){Ft&&ae&&e.texStorage2D(r.TEXTURE_CUBE_MAP,rt,Ht,Et.width,Et.height);for(let j=0;j<6;j++){W=ft[j].mipmaps;for(let ht=0;ht<W.length;ht++){const ct=W[ht];S.format!==Rn?Ct!==null?Ft?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,0,0,ct.width,ct.height,Ct,ct.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,Ht,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,0,0,ct.width,ct.height,Ct,pt,ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,Ht,ct.width,ct.height,0,Ct,pt,ct.data)}}}else{if(W=S.mipmaps,Ft&&ae){W.length>0&&rt++;const j=xt(ft[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,rt,Ht,j.width,j.height)}for(let j=0;j<6;j++)if(et){Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ft[j].width,ft[j].height,Ct,pt,ft[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,ft[j].width,ft[j].height,0,Ct,pt,ft[j].data);for(let ht=0;ht<W.length;ht++){const It=W[ht].image[j].image;Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,0,0,It.width,It.height,Ct,pt,It.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,Ht,It.width,It.height,0,Ct,pt,It.data)}}else{Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ct,pt,ft[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,Ct,pt,ft[j]);for(let ht=0;ht<W.length;ht++){const ct=W[ht];Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,0,0,Ct,pt,ct.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,Ht,Ct,pt,ct.image[j])}}}m(S)&&f(r.TEXTURE_CUBE_MAP),Y.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function gt(C,S,B,K,J,Y){const vt=s.convert(B.format,B.colorSpace),ot=s.convert(B.type),dt=y(B.internalFormat,vt,ot,B.colorSpace),Wt=n.get(S),et=n.get(B);if(et.__renderTarget=S,!Wt.__hasExternalTextures){const ft=Math.max(1,S.width>>Y),Et=Math.max(1,S.height>>Y);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,dt,ft,Et,S.depth,0,vt,ot,null):e.texImage2D(J,Y,dt,ft,Et,0,vt,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Gt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,J,et.__webglTexture,0,kt(S)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,J,et.__webglTexture,Y),e.bindFramebuffer(r.FRAMEBUFFER,null)}function at(C,S,B){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer){const K=S.depthTexture,J=K&&K.isDepthTexture?K.type:null,Y=x(S.stencilBuffer,J),vt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=kt(S);Gt(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,Y,S.width,S.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,Y,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Y,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,C)}else{const K=S.textures;for(let J=0;J<K.length;J++){const Y=K[J],vt=s.convert(Y.format,Y.colorSpace),ot=s.convert(Y.type),dt=y(Y.internalFormat,vt,ot,Y.colorSpace),Wt=kt(S);B&&Gt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,dt,S.width,S.height):Gt(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt,dt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,dt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function bt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const J=K.__webglTexture,Y=kt(S);if(S.depthTexture.format===br)Gt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(S.depthTexture.format===Fr)Gt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Pt(C){const S=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=K}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");bt(S.__webglFramebuffer,C)}else if(B){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=r.createRenderbuffer(),at(S.__webglDepthbuffer[K],C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),at(S.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,J)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(C,S,B){const K=n.get(C);S!==void 0&&gt(K.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Pt(C)}function he(C){const S=C.texture,B=n.get(C),K=n.get(S);C.addEventListener("dispose",w);const J=C.textures,Y=C.isWebGLCubeRenderTarget===!0,vt=J.length>1;if(vt||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=S.version,a.memory.textures++),Y){B.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ot]=[];for(let dt=0;dt<S.mipmaps.length;dt++)B.__webglFramebuffer[ot][dt]=r.createFramebuffer()}else B.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)B.__webglFramebuffer[ot]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(vt)for(let ot=0,dt=J.length;ot<dt;ot++){const Wt=n.get(J[ot]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&Gt(C)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const dt=J[ot];B.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[ot]);const Wt=s.convert(dt.format,dt.colorSpace),et=s.convert(dt.type),ft=y(dt.internalFormat,Wt,et,dt.colorSpace,C.isXRRenderTarget===!0),Et=kt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Et,ft,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,B.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),at(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),At(r.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)gt(B.__webglFramebuffer[ot][dt],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else gt(B.__webglFramebuffer[ot],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(S)&&f(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ot=0,dt=J.length;ot<dt;ot++){const Wt=J[ot],et=n.get(Wt);e.bindTexture(r.TEXTURE_2D,et.__webglTexture),At(r.TEXTURE_2D,Wt),gt(B.__webglFramebuffer,C,Wt,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,0),m(Wt)&&f(r.TEXTURE_2D)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ot=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,K.__webglTexture),At(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)gt(B.__webglFramebuffer[dt],C,S,r.COLOR_ATTACHMENT0,ot,dt);else gt(B.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,ot,0);m(S)&&f(ot),e.unbindTexture()}C.depthBuffer&&Pt(C)}function Vt(C){const S=C.textures;for(let B=0,K=S.length;B<K;B++){const J=S[B];if(m(J)){const Y=T(C),vt=n.get(J).__webglTexture;e.bindTexture(Y,vt),f(Y),e.unbindTexture()}}}const xe=[],D=[];function _n(C){if(C.samples>0){if(Gt(C)===!1){const S=C.textures,B=C.width,K=C.height;let J=r.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=n.get(C),ot=S.length>1;if(ot)for(let dt=0;dt<S.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let dt=0;dt<S.length;dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,vt.__webglColorRenderbuffer[dt]);const Wt=n.get(S[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Wt,0)}r.blitFramebuffer(0,0,B,K,0,0,B,K,J,r.NEAREST),l===!0&&(xe.length=0,D.length=0,xe.push(r.COLOR_ATTACHMENT0+dt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(xe.push(Y),D.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<S.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,vt.__webglColorRenderbuffer[dt]);const Wt=n.get(S[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,Wt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function kt(C){return Math.min(i.maxSamples,C.samples)}function Gt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Mt(C){const S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function oe(C,S){const B=C.colorSpace,K=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Nr&&B!==ci&&(Yt.getTransfer(B)===Qt?(K!==Rn||J!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function xt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=Ot,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Gt}function Z0(r,t){function e(n,i=ci){let s;const a=Yt.getTransfer(i);if(n===ti)return r.UNSIGNED_BYTE;if(n===Pl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===iu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===eu)return r.BYTE;if(n===nu)return r.SHORT;if(n===us)return r.UNSIGNED_SHORT;if(n===Rl)return r.INT;if(n===Yi)return r.UNSIGNED_INT;if(n===Nn)return r.FLOAT;if(n===Ss)return r.HALF_FLOAT;if(n===ru)return r.ALPHA;if(n===su)return r.RGB;if(n===Rn)return r.RGBA;if(n===au)return r.LUMINANCE;if(n===ou)return r.LUMINANCE_ALPHA;if(n===br)return r.DEPTH_COMPONENT;if(n===Fr)return r.DEPTH_STENCIL;if(n===Il)return r.RED;if(n===Ll)return r.RED_INTEGER;if(n===lu)return r.RG;if(n===Ul)return r.RG_INTEGER;if(n===Fl)return r.RGBA_INTEGER;if(n===ia||n===ra||n===sa||n===aa)if(a===Qt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ia)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ia)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bo||n===zo||n===ko||n===Go)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ko)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Go)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ho||n===Vo||n===Wo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ho||n===Vo)return a===Qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Wo)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xo||n===qo||n===Yo||n===$o||n===Ko||n===jo||n===Zo||n===Jo||n===Qo||n===tl||n===el||n===nl||n===il||n===rl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xo)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qo)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yo)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$o)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ko)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jo)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jo)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qo)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rl)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===sl||n===al)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===oa)return a===Qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cu||n===ol||n===ll||n===cl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===oa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ll)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const J0={type:"move"};class _o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(J0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ev{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Be,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vi({vertexShader:Q0,fragmentShader:tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nv extends Wr{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new ev,m=e.getContextAttributes();let f=null,T=null;const y=[],x=[],b=new Ut;let A=null;const w=new Ye;w.viewport=new ee;const R=new Ye;R.viewport=new ee;const v=[w,R],M=new yp;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=y[X];return tt===void 0&&(tt=new _o,y[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=y[X];return tt===void 0&&(tt=new _o,y[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=y[X];return tt===void 0&&(tt=new _o,y[X]=tt),tt.getHandSpace()};function N(X){const tt=x.indexOf(X.inputSource);if(tt===-1)return;const gt=y[tt];gt!==void 0&&(gt.update(X.inputSource,X.frame,c||a),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",q);for(let X=0;X<y.length;X++){const tt=x[X];tt!==null&&(x[X]=null,y[X].disconnect(tt))}P=null,O=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,T=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",z),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(b),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let gt=null,at=null,bt=null;m.depth&&(bt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=m.stencil?Fr:br,at=m.stencil?Ur:Yi);const Pt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Pt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new $i(d.textureWidth,d.textureHeight,{format:Rn,type:ti,depthTexture:new bu(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const gt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,gt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new $i(p.framebufferWidth,p.framebufferHeight,{format:Rn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(X){for(let tt=0;tt<X.removed.length;tt++){const gt=X.removed[tt],at=x.indexOf(gt);at>=0&&(x[at]=null,y[at].disconnect(gt))}for(let tt=0;tt<X.added.length;tt++){const gt=X.added[tt];let at=x.indexOf(gt);if(at===-1){for(let Pt=0;Pt<y.length;Pt++)if(Pt>=x.length){x.push(gt),at=Pt;break}else if(x[Pt]===null){x[Pt]=gt,at=Pt;break}if(at===-1)break}const bt=y[at];bt&&bt.connect(gt)}}const H=new I,Z=new I;function V(X,tt,gt){H.setFromMatrixPosition(tt.matrixWorld),Z.setFromMatrixPosition(gt.matrixWorld);const at=H.distanceTo(Z),bt=tt.projectionMatrix.elements,Pt=gt.projectionMatrix.elements,Ot=bt[14]/(bt[10]-1),he=bt[14]/(bt[10]+1),Vt=(bt[9]+1)/bt[5],xe=(bt[9]-1)/bt[5],D=(bt[8]-1)/bt[0],_n=(Pt[8]+1)/Pt[0],kt=Ot*D,Gt=Ot*_n,Mt=at/(-D+_n),oe=Mt*-D;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(oe),X.translateZ(Mt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),bt[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const xt=Ot+Mt,C=he+Mt,S=kt-oe,B=Gt+(at-oe),K=Vt*he/C*xt,J=xe*he/C*xt;X.projectionMatrix.makePerspective(S,B,K,J,xt,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function nt(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let tt=X.near,gt=X.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),M.near=R.near=w.near=tt,M.far=R.far=w.far=gt,(P!==M.near||O!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,O=M.far),w.layers.mask=X.layers.mask|2,R.layers.mask=X.layers.mask|4,M.layers.mask=w.layers.mask|R.layers.mask;const at=X.parent,bt=M.cameras;nt(M,at);for(let Pt=0;Pt<bt.length;Pt++)nt(bt[Pt],at);bt.length===2?V(M,w,R):M.projectionMatrix.copy(w.projectionMatrix),lt(X,M,at)};function lt(X,tt,gt){gt===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ga*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let _t=null;function At(X,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){const gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let at=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let Pt=0;Pt<gt.length;Pt++){const Ot=gt[Pt];let he=null;if(p!==null)he=p.getViewport(Ot);else{const xe=u.getViewSubImage(d,Ot);he=xe.viewport,Pt===0&&(t.setRenderTargetTextures(T,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),t.setRenderTarget(T))}let Vt=v[Pt];Vt===void 0&&(Vt=new Ye,Vt.layers.enable(Pt),Vt.viewport=new ee,v[Pt]=Vt),Vt.matrix.fromArray(Ot.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ot.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(he.x,he.y,he.width,he.height),Pt===0&&(M.matrix.copy(Vt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(Vt)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Pt=u.getDepthInformation(gt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,i.renderState)}}for(let gt=0;gt<y.length;gt++){const at=x[gt],bt=y[gt];at!==null&&bt!==void 0&&bt.update(at,tt,c||a)}_t&&_t(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const $t=new Au;$t.setAnimationLoop(At),this.setAnimationLoop=function(X){_t=X},this.dispose=function(){}}}const Di=new zn,iv=new ne;function rv(r,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Mu(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,T,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,T,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===je&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===je&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=t.get(f),y=T.envMap,x=T.envMapRotation;y&&(m.envMap.value=y,Di.copy(x),Di.x*=-1,Di.y*=-1,Di.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(iv.makeRotationFromEuler(Di)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===je&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sv(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const x=y.program;n.uniformBlockBinding(T,x)}function c(T,y){let x=i[T.id];x===void 0&&(g(T),x=h(T),i[T.id]=x,T.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(T,b);const A=t.render.frame;s[T.id]!==A&&(d(T),s[T.id]=A)}function h(T){const y=u();T.__bindingPointIndex=y;const x=r.createBuffer(),b=T.__size,A=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,b,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const y=i[T.id],x=T.uniforms,b=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let A=0,w=x.length;A<w;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let v=0,M=R.length;v<M;v++){const P=R[v];if(p(P,A,v,b)===!0){const O=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let q=0;q<N.length;q++){const H=N[q],Z=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,O+z,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(T,y,x,b){const A=T.value,w=y+"_"+x;if(b[w]===void 0)return typeof A=="number"||typeof A=="boolean"?b[w]=A:b[w]=A.clone(),!0;{const R=b[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return b[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(T){const y=T.uniforms;let x=0;const b=16;for(let w=0,R=y.length;w<R;w++){const v=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,P=v.length;M<P;M++){const O=v[M],N=Array.isArray(O.value)?O.value:[O.value];for(let z=0,q=N.length;z<q;z++){const H=N[z],Z=_(H),V=x%b,nt=V%Z.boundary,lt=V+nt;x+=nt,lt!==0&&b-lt<Z.storage&&(x+=b-lt),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=Z.storage}}}const A=x%b;return A>0&&(x+=b-A),T.__size=x,T.__cache={},this}function _(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function f(){for(const T in i)r.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:l,update:c,dispose:f}}class av{constructor(t={}){const{canvas:e=Of(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const T=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=se,this.toneMapping=Jn,this.toneMappingExposure=1;const x=this;let b=!1,A=0,w=0,R=null,v=-1,M=null;const P=new ee,O=new ee;let N=null;const z=new wt(0);let q=0,H=e.width,Z=e.height,V=1,nt=null,lt=null;const _t=new ee(0,0,H,Z),At=new ee(0,0,H,Z);let $t=!1;const X=new Ol;let tt=!1,gt=!1;this.transmissionResolutionScale=1;const at=new ne,bt=new ne,Pt=new I,Ot=new ee,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function xe(){return R===null?V:1}let D=n;function _n(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cl}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ct,!1),D===null){const U="webgl2";if(D=_n(U,E),D===null)throw _n(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let kt,Gt,Mt,oe,xt,C,S,B,K,J,Y,vt,ot,dt,Wt,et,ft,Et,Ct,pt,Ht,Ft,ae,L;function rt(){kt=new mg(D),kt.init(),Ft=new Z0(D,kt),Gt=new cg(D,kt,t,Ft),Mt=new K0(D,kt),Gt.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),oe=new vg(D),xt=new N0,C=new j0(D,kt,Mt,xt,Gt,Ft,oe),S=new ug(x),B=new pg(x),K=new bp(D),ae=new og(D,K),J=new _g(D,K,oe,ae),Y=new Mg(D,J,K,oe),Ct=new xg(D,Gt,C),et=new hg(xt),vt=new F0(x,S,B,kt,Gt,ae,et),ot=new rv(x,xt),dt=new B0,Wt=new W0(kt),Et=new ag(x,S,B,Mt,Y,p,l),ft=new Y0(x,Y,Gt),L=new sv(D,oe,Gt,Mt),pt=new lg(D,kt,oe),Ht=new gg(D,kt,oe),oe.programs=vt.programs,x.capabilities=Gt,x.extensions=kt,x.properties=xt,x.renderLists=dt,x.shadowMap=ft,x.state=Mt,x.info=oe}rt();const W=new nv(x,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=kt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=kt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(H,Z,!1))},this.getSize=function(E){return E.set(H,Z)},this.setSize=function(E,U,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,Z=U,e.width=Math.floor(E*V),e.height=Math.floor(U*V),k===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(H*V,Z*V).floor()},this.setDrawingBufferSize=function(E,U,k){H=E,Z=U,V=k,e.width=Math.floor(E*k),e.height=Math.floor(U*k),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(_t)},this.setViewport=function(E,U,k,G){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,U,k,G),Mt.viewport(P.copy(_t).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(At)},this.setScissor=function(E,U,k,G){E.isVector4?At.set(E.x,E.y,E.z,E.w):At.set(E,U,k,G),Mt.scissor(O.copy(At).multiplyScalar(V).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(E){Mt.setScissorTest($t=E)},this.setOpaqueSort=function(E){nt=E},this.setTransparentSort=function(E){lt=E},this.getClearColor=function(E){return E.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(E=!0,U=!0,k=!0){let G=0;if(E){let F=!1;if(R!==null){const Q=R.texture.format;F=Q===Fl||Q===Ul||Q===Ll}if(F){const Q=R.texture.type,st=Q===ti||Q===Yi||Q===us||Q===Ur||Q===Pl||Q===Dl,ut=Et.getClearColor(),mt=Et.getClearAlpha(),Rt=ut.r,Dt=ut.g,St=ut.b;st?(g[0]=Rt,g[1]=Dt,g[2]=St,g[3]=mt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Rt,_[1]=Dt,_[2]=St,_[3]=mt,D.clearBufferiv(D.COLOR,0,_))}else G|=D.COLOR_BUFFER_BIT}U&&(G|=D.DEPTH_BUFFER_BIT),k&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Et.dispose(),dt.dispose(),Wt.dispose(),xt.dispose(),S.dispose(),B.dispose(),Y.dispose(),ae.dispose(),L.dispose(),vt.dispose(),W.dispose(),W.removeEventListener("sessionstart",lc),W.removeEventListener("sessionend",cc),Ti.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=oe.autoReset,U=ft.enabled,k=ft.autoUpdate,G=ft.needsUpdate,F=ft.type;rt(),oe.autoReset=E,ft.enabled=U,ft.autoUpdate=k,ft.needsUpdate=G,ft.type=F}function ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function It(E){const U=E.target;U.removeEventListener("dispose",It),pe(U)}function pe(E){Le(E),xt.remove(E)}function Le(E){const U=xt.get(E).programs;U!==void 0&&(U.forEach(function(k){vt.releaseProgram(k)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,k,G,F,Q){U===null&&(U=he);const st=F.isMesh&&F.matrixWorld.determinant()<0,ut=Nd(E,U,k,G,F);Mt.setMaterial(G,st);let mt=k.index,Rt=1;if(G.wireframe===!0){if(mt=J.getWireframeAttribute(k),mt===void 0)return;Rt=2}const Dt=k.drawRange,St=k.attributes.position;let Xt=Dt.start*Rt,Kt=(Dt.start+Dt.count)*Rt;Q!==null&&(Xt=Math.max(Xt,Q.start*Rt),Kt=Math.min(Kt,(Q.start+Q.count)*Rt)),mt!==null?(Xt=Math.max(Xt,0),Kt=Math.min(Kt,mt.count)):St!=null&&(Xt=Math.max(Xt,0),Kt=Math.min(Kt,St.count));const Se=Kt-Xt;if(Se<0||Se===1/0)return;ae.setup(F,G,ut,k,mt);let me,qt=pt;if(mt!==null&&(me=K.get(mt),qt=Ht,qt.setIndex(me)),F.isMesh)G.wireframe===!0?(Mt.setLineWidth(G.wireframeLinewidth*xe()),qt.setMode(D.LINES)):qt.setMode(D.TRIANGLES);else if(F.isLine){let yt=G.linewidth;yt===void 0&&(yt=1),Mt.setLineWidth(yt*xe()),F.isLineSegments?qt.setMode(D.LINES):F.isLineLoop?qt.setMode(D.LINE_LOOP):qt.setMode(D.LINE_STRIP)}else F.isPoints?qt.setMode(D.POINTS):F.isSprite&&qt.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)qt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))qt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const yt=F._multiDrawStarts,Pe=F._multiDrawCounts,jt=F._multiDrawCount,bn=mt?K.get(mt).bytesPerElement:1,Qi=xt.get(G).currentProgram.getUniforms();for(let nn=0;nn<jt;nn++)Qi.setValue(D,"_gl_DrawID",nn),qt.render(yt[nn]/bn,Pe[nn])}else if(F.isInstancedMesh)qt.renderInstances(Xt,Se,F.count);else if(k.isInstancedBufferGeometry){const yt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Pe=Math.min(k.instanceCount,yt);qt.renderInstances(Xt,Se,Pe)}else qt.render(Xt,Se)};function Zt(E,U,k){E.transparent===!0&&E.side===on&&E.forceSinglePass===!1?(E.side=je,E.needsUpdate=!0,ws(E,U,k),E.side=gi,E.needsUpdate=!0,ws(E,U,k),E.side=on):ws(E,U,k)}this.compile=function(E,U,k=null){k===null&&(k=E),f=Wt.get(k),f.init(U),y.push(f),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),E!==k&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const G=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const Q=F.material;if(Q)if(Array.isArray(Q))for(let st=0;st<Q.length;st++){const ut=Q[st];Zt(ut,k,F),G.add(ut)}else Zt(Q,k,F),G.add(Q)}),y.pop(),f=null,G},this.compileAsync=function(E,U,k=null){const G=this.compile(E,U,k);return new Promise(F=>{function Q(){if(G.forEach(function(st){xt.get(st).currentProgram.isReady()&&G.delete(st)}),G.size===0){F(E);return}setTimeout(Q,10)}kt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Tn=null;function Gn(E){Tn&&Tn(E)}function lc(){Ti.stop()}function cc(){Ti.start()}const Ti=new Au;Ti.setAnimationLoop(Gn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(E){Tn=E,W.setAnimationLoop(E),E===null?Ti.stop():Ti.start()},W.addEventListener("sessionstart",lc),W.addEventListener("sessionend",cc),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,R),f=Wt.get(E,y.length),f.init(U),y.push(f),bt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(bt),gt=this.localClippingEnabled,tt=et.init(this.clippingPlanes,gt),m=dt.get(E,T.length),m.init(),T.push(m),W.enabled===!0&&W.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&Fa(Q,U,-1/0,x.sortObjects)}Fa(E,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(nt,lt),Vt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Vt&&Et.addToRenderList(m,E),this.info.render.frame++,tt===!0&&et.beginShadows();const k=f.state.shadowsArray;ft.render(k,E,U),tt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(f.setupLights(),U.isArrayCamera){const Q=U.cameras;if(F.length>0)for(let st=0,ut=Q.length;st<ut;st++){const mt=Q[st];uc(G,F,E,mt)}Vt&&Et.render(E);for(let st=0,ut=Q.length;st<ut;st++){const mt=Q[st];hc(m,E,mt,mt.viewport)}}else F.length>0&&uc(G,F,E,U),Vt&&Et.render(E),hc(m,E,U);R!==null&&w===0&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,U),ae.resetDefaultState(),v=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],tt===!0&&et.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Fa(E,U,k,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){G&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(bt);const st=Y.update(E),ut=E.material;ut.visible&&m.push(E,st,ut,k,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const st=Y.update(E),ut=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Ot.copy(st.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(bt)),Array.isArray(ut)){const mt=st.groups;for(let Rt=0,Dt=mt.length;Rt<Dt;Rt++){const St=mt[Rt],Xt=ut[St.materialIndex];Xt&&Xt.visible&&m.push(E,st,Xt,k,Ot.z,St)}}else ut.visible&&m.push(E,st,ut,k,Ot.z,null)}}const Q=E.children;for(let st=0,ut=Q.length;st<ut;st++)Fa(Q[st],U,k,G)}function hc(E,U,k,G){const F=E.opaque,Q=E.transmissive,st=E.transparent;f.setupLightsView(k),tt===!0&&et.setGlobalState(x.clippingPlanes,k),G&&Mt.viewport(P.copy(G)),F.length>0&&bs(F,U,k),Q.length>0&&bs(Q,U,k),st.length>0&&bs(st,U,k),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function uc(E,U,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new $i(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Ss:ti,minFilter:ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const Q=f.state.transmissionRenderTarget[G.id],st=G.viewport||P;Q.setSize(st.z*x.transmissionResolutionScale,st.w*x.transmissionResolutionScale);const ut=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(z),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Vt&&Et.render(k);const mt=x.toneMapping;x.toneMapping=Jn;const Rt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),tt===!0&&et.setGlobalState(x.clippingPlanes,G),bs(E,k,G),C.updateMultisampleRenderTarget(Q),C.updateRenderTargetMipmap(Q),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let St=0,Xt=U.length;St<Xt;St++){const Kt=U[St],Se=Kt.object,me=Kt.geometry,qt=Kt.material,yt=Kt.group;if(qt.side===on&&Se.layers.test(G.layers)){const Pe=qt.side;qt.side=je,qt.needsUpdate=!0,dc(Se,k,G,me,qt,yt),qt.side=Pe,qt.needsUpdate=!0,Dt=!0}}Dt===!0&&(C.updateMultisampleRenderTarget(Q),C.updateRenderTargetMipmap(Q))}x.setRenderTarget(ut),x.setClearColor(z,q),Rt!==void 0&&(G.viewport=Rt),x.toneMapping=mt}function bs(E,U,k){const G=U.isScene===!0?U.overrideMaterial:null;for(let F=0,Q=E.length;F<Q;F++){const st=E[F],ut=st.object,mt=st.geometry,Rt=G===null?st.material:G,Dt=st.group;ut.layers.test(k.layers)&&dc(ut,U,k,mt,Rt,Dt)}}function dc(E,U,k,G,F,Q){E.onBeforeRender(x,U,k,G,F,Q),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(x,U,k,G,E,Q),F.transparent===!0&&F.side===on&&F.forceSinglePass===!1?(F.side=je,F.needsUpdate=!0,x.renderBufferDirect(k,U,G,F,E,Q),F.side=gi,F.needsUpdate=!0,x.renderBufferDirect(k,U,G,F,E,Q),F.side=on):x.renderBufferDirect(k,U,G,F,E,Q),E.onAfterRender(x,U,k,G,F,Q)}function ws(E,U,k){U.isScene!==!0&&(U=he);const G=xt.get(E),F=f.state.lights,Q=f.state.shadowsArray,st=F.state.version,ut=vt.getParameters(E,F.state,Q,U,k),mt=vt.getProgramCacheKey(ut);let Rt=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?B:S).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Rt===void 0&&(E.addEventListener("dispose",It),Rt=new Map,G.programs=Rt);let Dt=Rt.get(mt);if(Dt!==void 0){if(G.currentProgram===Dt&&G.lightsStateVersion===st)return pc(E,ut),Dt}else ut.uniforms=vt.getUniforms(E),E.onBeforeCompile(ut,x),Dt=vt.acquireProgram(ut,mt),Rt.set(mt,Dt),G.uniforms=ut.uniforms;const St=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(St.clippingPlanes=et.uniform),pc(E,ut),G.needsLights=Bd(E),G.lightsStateVersion=st,G.needsLights&&(St.ambientLightColor.value=F.state.ambient,St.lightProbe.value=F.state.probe,St.directionalLights.value=F.state.directional,St.directionalLightShadows.value=F.state.directionalShadow,St.spotLights.value=F.state.spot,St.spotLightShadows.value=F.state.spotShadow,St.rectAreaLights.value=F.state.rectArea,St.ltc_1.value=F.state.rectAreaLTC1,St.ltc_2.value=F.state.rectAreaLTC2,St.pointLights.value=F.state.point,St.pointLightShadows.value=F.state.pointShadow,St.hemisphereLights.value=F.state.hemi,St.directionalShadowMap.value=F.state.directionalShadowMap,St.directionalShadowMatrix.value=F.state.directionalShadowMatrix,St.spotShadowMap.value=F.state.spotShadowMap,St.spotLightMatrix.value=F.state.spotLightMatrix,St.spotLightMap.value=F.state.spotLightMap,St.pointShadowMap.value=F.state.pointShadowMap,St.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Dt,G.uniformsList=null,Dt}function fc(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=la.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function pc(E,U){const k=xt.get(E);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Nd(E,U,k,G,F){U.isScene!==!0&&(U=he),C.resetTextureUnits();const Q=U.fog,st=G.isMeshStandardMaterial?U.environment:null,ut=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Nr,mt=(G.isMeshStandardMaterial?B:S).get(G.envMap||st),Rt=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Dt=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),St=!!k.morphAttributes.position,Xt=!!k.morphAttributes.normal,Kt=!!k.morphAttributes.color;let Se=Jn;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Se=x.toneMapping);const me=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,qt=me!==void 0?me.length:0,yt=xt.get(G),Pe=f.state.lights;if(tt===!0&&(gt===!0||E!==M)){const Ge=E===M&&G.id===v;et.setState(G,E,Ge)}let jt=!1;G.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Pe.state.version||yt.outputColorSpace!==ut||F.isBatchedMesh&&yt.batching===!1||!F.isBatchedMesh&&yt.batching===!0||F.isBatchedMesh&&yt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&yt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&yt.instancing===!1||!F.isInstancedMesh&&yt.instancing===!0||F.isSkinnedMesh&&yt.skinning===!1||!F.isSkinnedMesh&&yt.skinning===!0||F.isInstancedMesh&&yt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&yt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&yt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&yt.instancingMorph===!1&&F.morphTexture!==null||yt.envMap!==mt||G.fog===!0&&yt.fog!==Q||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==et.numPlanes||yt.numIntersection!==et.numIntersection)||yt.vertexAlphas!==Rt||yt.vertexTangents!==Dt||yt.morphTargets!==St||yt.morphNormals!==Xt||yt.morphColors!==Kt||yt.toneMapping!==Se||yt.morphTargetsCount!==qt)&&(jt=!0):(jt=!0,yt.__version=G.version);let bn=yt.currentProgram;jt===!0&&(bn=ws(G,U,F));let Qi=!1,nn=!1,Yr=!1;const le=bn.getUniforms(),gn=yt.uniforms;if(Mt.useProgram(bn.program)&&(Qi=!0,nn=!0,Yr=!0),G.id!==v&&(v=G.id,nn=!0),Qi||M!==E){Mt.buffers.depth.getReversed()?(at.copy(E.projectionMatrix),zf(at),kf(at),le.setValue(D,"projectionMatrix",at)):le.setValue(D,"projectionMatrix",E.projectionMatrix),le.setValue(D,"viewMatrix",E.matrixWorldInverse);const qe=le.map.cameraPosition;qe!==void 0&&qe.setValue(D,Pt.setFromMatrixPosition(E.matrixWorld)),Gt.logarithmicDepthBuffer&&le.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&le.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,nn=!0,Yr=!0)}if(F.isSkinnedMesh){le.setOptional(D,F,"bindMatrix"),le.setOptional(D,F,"bindMatrixInverse");const Ge=F.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),le.setValue(D,"boneTexture",Ge.boneTexture,C))}F.isBatchedMesh&&(le.setOptional(D,F,"batchingTexture"),le.setValue(D,"batchingTexture",F._matricesTexture,C),le.setOptional(D,F,"batchingIdTexture"),le.setValue(D,"batchingIdTexture",F._indirectTexture,C),le.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&le.setValue(D,"batchingColorTexture",F._colorsTexture,C));const vn=k.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Ct.update(F,k,bn),(nn||yt.receiveShadow!==F.receiveShadow)&&(yt.receiveShadow=F.receiveShadow,le.setValue(D,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(gn.envMap.value=mt,gn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(gn.envMapIntensity.value=U.environmentIntensity),nn&&(le.setValue(D,"toneMappingExposure",x.toneMappingExposure),yt.needsLights&&Od(gn,Yr),Q&&G.fog===!0&&ot.refreshFogUniforms(gn,Q),ot.refreshMaterialUniforms(gn,G,V,Z,f.state.transmissionRenderTarget[E.id]),la.upload(D,fc(yt),gn,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(la.upload(D,fc(yt),gn,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&le.setValue(D,"center",F.center),le.setValue(D,"modelViewMatrix",F.modelViewMatrix),le.setValue(D,"normalMatrix",F.normalMatrix),le.setValue(D,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ge=G.uniformsGroups;for(let qe=0,Na=Ge.length;qe<Na;qe++){const bi=Ge[qe];L.update(bi,bn),L.bind(bi,bn)}}return bn}function Od(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Bd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,U,k){xt.get(E.texture).__webglTexture=U,xt.get(E.depthTexture).__webglTexture=k;const G=xt.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const k=xt.get(E);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const zd=D.createFramebuffer();this.setRenderTarget=function(E,U=0,k=0){R=E,A=U,w=k;let G=!0,F=null,Q=!1,st=!1;if(E){const mt=xt.get(E);if(mt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(mt.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(mt.__hasExternalTextures)C.rebindTextures(E,xt.get(E.texture).__webglTexture,xt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const St=E.depthTexture;if(mt.__boundDepthTexture!==St){if(St!==null&&xt.has(St)&&(E.width!==St.image.width||E.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Rt=E.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(st=!0);const Dt=xt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?F=Dt[U][k]:F=Dt[U],Q=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?F=xt.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?F=Dt[k]:F=Dt,P.copy(E.viewport),O.copy(E.scissor),N=E.scissorTest}else P.copy(_t).multiplyScalar(V).floor(),O.copy(At).multiplyScalar(V).floor(),N=$t;if(k!==0&&(F=zd),Mt.bindFramebuffer(D.FRAMEBUFFER,F)&&G&&Mt.drawBuffers(E,F),Mt.viewport(P),Mt.scissor(O),Mt.setScissorTest(N),Q){const mt=xt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,k)}else if(st){const mt=xt.get(E.texture),Rt=U;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,mt.__webglTexture,k,Rt)}else if(E!==null&&k!==0){const mt=xt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mt.__webglTexture,k)}v=-1},this.readRenderTargetPixels=function(E,U,k,G,F,Q,st){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&st!==void 0&&(ut=ut[st]),ut){Mt.bindFramebuffer(D.FRAMEBUFFER,ut);try{const mt=E.texture,Rt=mt.format,Dt=mt.type;if(!Gt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&k>=0&&k<=E.height-F&&D.readPixels(U,k,G,F,Ft.convert(Rt),Ft.convert(Dt),Q)}finally{const mt=R!==null?xt.get(R).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(E,U,k,G,F,Q,st){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&st!==void 0&&(ut=ut[st]),ut){const mt=E.texture,Rt=mt.format,Dt=mt.type;if(!Gt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-G&&k>=0&&k<=E.height-F){Mt.bindFramebuffer(D.FRAMEBUFFER,ut);const St=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),D.readPixels(U,k,G,F,Ft.convert(Rt),Ft.convert(Dt),0);const Xt=R!==null?xt.get(R).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,Xt);const Kt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Bf(D,Kt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q),D.deleteBuffer(St),D.deleteSync(Kt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,k=0){E.isTexture!==!0&&(Mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-k),F=Math.floor(E.image.width*G),Q=Math.floor(E.image.height*G),st=U!==null?U.x:0,ut=U!==null?U.y:0;C.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,st,ut,F,Q),Mt.unbindTexture()};const kd=D.createFramebuffer(),Gd=D.createFramebuffer();this.copyTextureToTexture=function(E,U,k=null,G=null,F=0,Q=null){E.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],U=arguments[2],Q=arguments[3]||0,k=null),Q===null&&(F!==0?(Mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=F,F=0):Q=0);let st,ut,mt,Rt,Dt,St,Xt,Kt,Se;const me=E.isCompressedTexture?E.mipmaps[Q]:E.image;if(k!==null)st=k.max.x-k.min.x,ut=k.max.y-k.min.y,mt=k.isBox3?k.max.z-k.min.z:1,Rt=k.min.x,Dt=k.min.y,St=k.isBox3?k.min.z:0;else{const vn=Math.pow(2,-F);st=Math.floor(me.width*vn),ut=Math.floor(me.height*vn),E.isDataArrayTexture?mt=me.depth:E.isData3DTexture?mt=Math.floor(me.depth*vn):mt=1,Rt=0,Dt=0,St=0}G!==null?(Xt=G.x,Kt=G.y,Se=G.z):(Xt=0,Kt=0,Se=0);const qt=Ft.convert(U.format),yt=Ft.convert(U.type);let Pe;U.isData3DTexture?(C.setTexture3D(U,0),Pe=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(C.setTexture2DArray(U,0),Pe=D.TEXTURE_2D_ARRAY):(C.setTexture2D(U,0),Pe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const jt=D.getParameter(D.UNPACK_ROW_LENGTH),bn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Qi=D.getParameter(D.UNPACK_SKIP_PIXELS),nn=D.getParameter(D.UNPACK_SKIP_ROWS),Yr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Dt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,St);const le=E.isDataArrayTexture||E.isData3DTexture,gn=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const vn=xt.get(E),Ge=xt.get(U),qe=xt.get(vn.__renderTarget),Na=xt.get(Ge.__renderTarget);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,qe.__webglFramebuffer),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let bi=0;bi<mt;bi++)le&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.get(E).__webglTexture,F,St+bi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.get(U).__webglTexture,Q,Se+bi)),D.blitFramebuffer(Rt,Dt,st,ut,Xt,Kt,st,ut,D.DEPTH_BUFFER_BIT,D.NEAREST);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||xt.has(E)){const vn=xt.get(E),Ge=xt.get(U);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,kd),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Gd);for(let qe=0;qe<mt;qe++)le?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vn.__webglTexture,F,St+qe):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,vn.__webglTexture,F),gn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ge.__webglTexture,Q,Se+qe):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ge.__webglTexture,Q),F!==0?D.blitFramebuffer(Rt,Dt,st,ut,Xt,Kt,st,ut,D.COLOR_BUFFER_BIT,D.NEAREST):gn?D.copyTexSubImage3D(Pe,Q,Xt,Kt,Se+qe,Rt,Dt,st,ut):D.copyTexSubImage2D(Pe,Q,Xt,Kt,Rt,Dt,st,ut);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else gn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Pe,Q,Xt,Kt,Se,st,ut,mt,qt,yt,me.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Pe,Q,Xt,Kt,Se,st,ut,mt,qt,me.data):D.texSubImage3D(Pe,Q,Xt,Kt,Se,st,ut,mt,qt,yt,me):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Q,Xt,Kt,st,ut,qt,yt,me.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Q,Xt,Kt,me.width,me.height,qt,me.data):D.texSubImage2D(D.TEXTURE_2D,Q,Xt,Kt,st,ut,qt,yt,me);D.pixelStorei(D.UNPACK_ROW_LENGTH,jt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Qi),D.pixelStorei(D.UNPACK_SKIP_ROWS,nn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Yr),Q===0&&U.generateMipmaps&&D.generateMipmap(Pe),Mt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,k=null,G=null,F=0){return E.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,G=arguments[1]||null,E=arguments[2],U=arguments[3],F=arguments[4]||0),Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,k,G,F)},this.initRenderTarget=function(E){xt.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Mt.unbindTexture()},this.resetState=function(){A=0,w=0,R=null,Mt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}function $n(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Iu(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fs={duration:.5,overwrite:!1,delay:0},Wl,De,ce,yn=1e8,re=1/yn,fl=Math.PI*2,ov=fl/4,lv=0,Lu=Math.sqrt,cv=Math.cos,hv=Math.sin,Re=function(t){return typeof t=="string"},_e=function(t){return typeof t=="function"},ei=function(t){return typeof t=="number"},Xl=function(t){return typeof t>"u"},kn=function(t){return typeof t=="object"},Ze=function(t){return t!==!1},ql=function(){return typeof window<"u"},ea=function(t){return _e(t)||Re(t)},Uu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ze=Array.isArray,uv=/random\([^)]+\)/g,dv=/,\s*/g,Sh=/(?:-?\.?\d|\.)+/gi,Fu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,yr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,go=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Nu=/[+-]=-?[.\d]+/,fv=/[^,'"\[\]\s]+/gi,pv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,de,Dn,pl,Yl,pn={},Ma={},Ou,Bu=function(t){return(Ma=zr(t,pn))&&en},$l=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ps=function(t,e){return!e&&console.warn(t)},zu=function(t,e){return t&&(pn[t]=e)&&Ma&&(Ma[t]=e)||pn},ms=function(){return 0},mv={suppressEvents:!0,isStart:!0,kill:!1},ca={suppressEvents:!0,kill:!1},_v={suppressEvents:!0},Kl={},mi=[],ml={},ku,an={},vo={},yh=30,ha=[],jl="",Zl=function(t){var e=t[0],n,i;if(kn(e)||_e(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ha.length;i--&&!ha[i].targetTest(e););n=ha[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new ld(t[i],n)))||t.splice(i,1);return t},Vi=function(t){return t._gsap||Zl(En(t))[0]._gsap},Gu=function(t,e,n){return(n=t[e])&&_e(n)?t[e]():Xl(n)&&t.getAttribute&&t.getAttribute(e)||n},Je=function(t,e){return(t=t.split(",")).forEach(e)||t},Me=function(t){return Math.round(t*1e5)/1e5||0},ue=function(t){return Math.round(t*1e7)/1e7||0},Cr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},gv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Sa=function(){var t=mi.length,e=mi.slice(0),n,i;for(ml={},mi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Jl=function(t){return!!(t._initted||t._startAt||t.add)},Hu=function(t,e,n,i){mi.length&&!De&&Sa(),t.render(e,n,!!(De&&e<0&&Jl(t))),mi.length&&!De&&Sa()},Vu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(fv).length<2?e:Re(t)?t.trim():t},Wu=function(t){return t},mn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},vv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},zr=function(t,e){for(var n in e)t[n]=e[n];return t},Eh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=kn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ya=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ls=function(t){var e=t.parent||de,n=t.keyframes?vv(ze(t.keyframes)):mn;if(Ze(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},xv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Xu=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Ia=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Mi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Wi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Mv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},_l=function(t,e,n,i){return t._startAt&&(De?t._startAt.revert(ca):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Sv=function r(t){return!t||t._ts&&r(t.parent)},Th=function(t){return t._repeat?kr(t._tTime,t=t.duration()+t._rDelay)*t:0},kr=function(t,e){var n=Math.floor(t=ue(t/e));return t&&n===t?n-1:n},Ea=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},La=function(t){return t._end=ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||re)||0))},Ua=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ue(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),La(t),n._dirty||Wi(n,t)),t},qu=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ea(t.rawTime(),e),(!e._dur||Ts(0,e.totalDuration(),n)-e._tTime>re)&&e.render(n,!0)),Wi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-re}},Fn=function(t,e,n,i){return e.parent&&Mi(e),e._start=ue((ei(n)?n:n||t!==de?Mn(t,n,e):t._time)+e._delay),e._end=ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Xu(t,e,"_first","_last",t._sort?"_start":0),gl(e)||(t._recent=e),i||qu(t,e),t._ts<0&&Ua(t,t._tTime),t},Yu=function(t,e){return(pn.ScrollTrigger||$l("scrollTrigger",e))&&pn.ScrollTrigger.create(e,t)},$u=function(t,e,n,i,s){if(tc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!De&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ku!==cn.frame)return mi.push(t),t._lazy=[s,i],1},yv=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},gl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ev=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&yv(t)&&!(!t._initted&&gl(t))||(t._ts<0||t._dp._ts<0)&&!gl(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=Ts(0,t._tDur,e),h=kr(l,o),t._yoyo&&h&1&&(a=1-a),h!==kr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||De||i||t._zTime===re||!e&&t._zTime){if(!t._initted&&$u(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?re:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&_l(t,e,n,!0),t._onUpdate&&!n&&hn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&hn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Mi(t,1),!n&&!De&&(hn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Tv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Gr=function(t,e,n,i){var s=t._repeat,a=ue(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:ue(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Ua(t,t._tTime=t._tDur*o),t.parent&&La(t),n||Wi(t.parent,t),t},bh=function(t){return t instanceof $e?Wi(t):Gr(t,t._dur)},bv={_start:0,endTime:ms,totalDuration:ms},Mn=function r(t,e,n){var i=t.labels,s=t._recent||bv,a=t.duration()>=yn?s.endTime(!1):t._dur,o,l,c;return Re(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(ze(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},cs=function(t,e,n){var i=ei(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ze(l.vars.inherit)&&l.parent;a.immediateRender=Ze(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Te(e[0],a,e[s+1])},Ei=function(t,e){return t||t===0?e(t):e},Ts=function(t,e,n){return n<t?t:n>e?e:n},Ne=function(t,e){return!Re(t)||!(e=pv.exec(t))?"":e[1]},wv=function(t,e,n){return Ei(n,function(i){return Ts(t,e,i)})},vl=[].slice,Ku=function(t,e){return t&&kn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&kn(t[0]))&&!t.nodeType&&t!==Dn},Av=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Re(i)&&!e||Ku(i,1)?(s=n).push.apply(s,En(i)):n.push(i)})||n},En=function(t,e,n){return ce&&!e&&ce.selector?ce.selector(t):Re(t)&&!n&&(pl||!Hr())?vl.call((e||Yl).querySelectorAll(t),0):ze(t)?Av(t,n):Ku(t)?vl.call(t,0):t?[t]:[]},xl=function(t){return t=En(t)[0]||ps("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return En(e,n.querySelectorAll?n:n===t?ps("Invalid scope")||Yl.createElement("div"):t)}},ju=function(t){return t.sort(function(){return .5-Math.random()})},Zu=function(t){if(_e(t))return t;var e=kn(t)?t:{each:t},n=Xi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return Re(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,p,g){var _=(g||e).length,m=a[_],f,T,y,x,b,A,w,R,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,yn])[1],!v){for(w=-yn;w<(w=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=a[_]=[],f=l?Math.min(v,_)*h-.5:i%v,T=v===yn?0:l?_*u/v-.5:i/v|0,w=0,R=yn,A=0;A<_;A++)y=A%v-f,x=T-(A/v|0),m[A]=b=c?Math.abs(c==="y"?x:y):Lu(y*y+x*x),b>w&&(w=b),b<R&&(R=b);i==="random"&&ju(m),m.max=w-R,m.min=R,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Ne(e.amount||e.each)||0,n=n&&_<0?kv(n):n}return _=(m[d]-m.min)/m.max||0,ue(m.b+(n?n(_):_)*m.v)+m.u}},Ml=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ue(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ei(n)?0:Ne(n))}},Ju=function(t,e){var n=ze(t),i,s;return!n&&kn(t)&&(i=n=t.radius||yn,t.values?(t=En(t.values),(s=!ei(t[0]))&&(i*=i)):t=Ml(t.increment)),Ei(e,n?_e(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=yn,h=0,u=t.length,d,p;u--;)s?(d=t[u].x-o,p=t[u].y-l,d=d*d+p*p):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:a,s||h===a||ei(a)?h:h+Ne(a)}:Ml(t))},Qu=function(t,e,n,i){return Ei(ze(t)?!e:n===!0?!!(n=0):!i,function(){return ze(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Cv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Rv=function(t,e){return function(n){return t(parseFloat(n))+(e||Ne(n))}},Pv=function(t,e,n){return ed(t,e,0,1,n)},td=function(t,e,n){return Ei(n,function(i){return t[~~e(i)]})},Dv=function r(t,e,n){var i=e-t;return ze(t)?td(t,r(0,t.length),e):Ei(n,function(s){return(i+(s-t)%i)%i+t})},Iv=function r(t,e,n){var i=e-t,s=i*2;return ze(t)?td(t,r(0,t.length-1),e):Ei(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},_s=function(t){return t.replace(uv,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(dv);return Qu(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ed=function(t,e,n,i,s){var a=e-t,o=i-n;return Ei(s,function(l){return n+((l-t)/a*o||0)})},Lv=function r(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var a=Re(t),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(ze(t)&&!ze(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=e}else i||(t=zr(ze(t)?[]:{},t));if(!h){for(l in e)Ql.call(o,t,l,"get",e[l]);s=function(g){return ic(g,o)||(a?t.p:t)}}}return Ei(n,s)},wh=function(t,e,n){var i=t.labels,s=yn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},hn=function(t,e,n){var i=t.vars,s=i[e],a=ce,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&mi.length&&Sa(),o&&(ce=o),h=l?s.apply(c,l):s.call(c),ce=a,h},as=function(t){return Mi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!De),t.progress()<1&&hn(t,"onInterrupt"),t},Er,nd=[],id=function(t){if(t)if(t=!t.name&&t.default||t,ql()||t.headless){var e=t.name,n=_e(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ms,render:ic,add:Ql,kill:jv,modifier:Kv,rawVars:0},a={targetTest:0,get:0,getSetter:nc,aliases:{},register:0};if(Hr(),t!==i){if(an[e])return;mn(i,mn(ya(t,s),a)),zr(i.prototype,zr(s,ya(t,a))),an[i.prop=e]=i,t.targetTest&&(ha.push(i),Kl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}zu(e,i),t.register&&t.register(en,i,Qe)}else nd.push(t)},ie=255,os={aqua:[0,ie,ie],lime:[0,ie,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ie],navy:[0,0,128],white:[ie,ie,ie],olive:[128,128,0],yellow:[ie,ie,0],orange:[ie,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ie,0,0],pink:[ie,192,203],cyan:[0,ie,ie],transparent:[ie,ie,ie,0]},xo=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ie+.5|0},rd=function(t,e,n){var i=t?ei(t)?[t>>16,t>>8&ie,t&ie]:0:os.black,s,a,o,l,c,h,u,d,p,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),os[t])i=os[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ie,i&ie,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ie,t&ie]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Sh),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=xo(l+1/3,s,a),i[1]=xo(l,s,a),i[2]=xo(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Fu),n&&i.length<4&&(i[3]=1),i}else i=t.match(Sh)||os.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/ie,a=i[1]/ie,o=i[2]/ie,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?l=c=0:(p=u-d,c=h>.5?p/(2-u-d):p/(u+d),l=u===s?(a-o)/p+(a<o?6:0):u===a?(o-s)/p+2:(s-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},sd=function(t){var e=[],n=[],i=-1;return t.split(_i).forEach(function(s){var a=s.match(yr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Ah=function(t,e,n){var i="",s=(t+i).match(_i),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=rd(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=sd(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(_i,"1").split(yr),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(_i),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},_i=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in os)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Uv=/hsl[a]?\(/,ad=function(t){var e=t.join(" "),n;if(_i.lastIndex=0,_i.test(e))return n=Uv.test(e),t[1]=Ah(t[1],n),t[0]=Ah(t[0],n,sd(t[1])),!0},gs,cn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,d,p,g=function _(m){var f=r()-i,T=m===!0,y,x,b,A;if((f>t||f<0)&&(n+=f-e),i+=f,b=i-n,y=b-a,(y>0||T)&&(A=++u.frame,d=b-u.time*1e3,u.time=b=b/1e3,a+=y+(y>=s?4:s-y),x=1),T||(l=c(_)),x)for(p=0;p<o.length;p++)o[p](b,d,A,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Ou&&(!pl&&ql()&&(Dn=pl=window,Yl=Dn.document||{},pn.gsap=en,(Dn.gsapVersions||(Dn.gsapVersions=[])).push(en.version),Bu(Ma||Dn.GreenSockGlobals||!Dn.gsap&&Dn||{}),nd.forEach(id)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},gs=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),gs=0,c=ms},lagSmoothing:function(m,f){t=m||1/0,e=Math.min(f||33,t)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,f,T){var y=f?function(x,b,A,w){m(x,b,A,w),u.remove(y)}:m;return u.remove(m),o[T?"unshift":"push"](y),Hr(),y},remove:function(m,f){~(f=o.indexOf(m))&&o.splice(f,1)&&p>=f&&p--},_listeners:o},u})(),Hr=function(){return!gs&&cn.wake()},zt={},Fv=/^[\d.\-M][\d.\-,\s]/,Nv=/["']/g,Ov=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Nv,"").trim():+c,i=l.substr(o+1).trim();return e},Bv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},zv=function(t){var e=(t+"").split("("),n=zt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Ov(e[1])]:Bv(t).split(",").map(Vu)):zt._CE&&Fv.test(t)?zt._CE("",t):n},kv=function(t){return function(e){return 1-t(1-e)}},Xi=function(t,e){return t&&(_e(t)?t:zt[t]||zv(t))||e},Ji=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Je(t,function(o){zt[o]=pn[o]=s,zt[a=o.toLowerCase()]=n;for(var l in s)zt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=zt[o+"."+l]=s[l]}),s},od=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Mo=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/fl*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*hv((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:od(o);return s=fl/s,l.config=function(c,h){return r(t,c,h)},l},So=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:od(n);return i.config=function(s){return r(t,s)},i};Je("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Ji(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});zt.Linear.easeNone=zt.none=zt.Linear.easeIn;Ji("Elastic",Mo("in"),Mo("out"),Mo());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Ji("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ji("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ji("Circ",function(r){return-(Lu(1-r*r)-1)});Ji("Sine",function(r){return r===1?1:-cv(r*ov)+1});Ji("Back",So("in"),So("out"),So());zt.SteppedEase=zt.steps=pn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-re;return function(o){return((i*Ts(0,a,o)|0)+s)*n}}};fs.ease=zt["quad.out"];Je("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return jl+=r+","+r+"Params,"});var ld=function(t,e){this.id=lv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Gu,this.set=e?e.getSetter:nc},vs=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Gr(this,+e.duration,1,1),this.data=e.data,ce&&(this._ctx=ce,ce.data.push(this)),gs||cn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Gr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Hr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ua(this,n),!s._dp||s.parent||qu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Fn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===re||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Hu(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Th(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Th(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?kr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-re?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ea(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-re?0:this._rts,this.totalTime(Ts(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),La(this),Mv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Hr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==re&&(this._tTime-=re)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ue(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Fn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ze(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ea(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=_v);var i=De;return De=n,Jl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),De=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,bh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,bh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Mn(this,n),Ze(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ze(i)),this._dur||(this._zTime=-re),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-re:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-re,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-re)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=_e(n)?n:Wu,l=function(){var h=i.then;i.then=null,s&&s(),_e(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){as(this)},r})();mn(vs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-re,_prom:0,_ps:!1,_rts:1});var $e=(function(r){Iu(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ze(n.sortChildren),de&&Fn(n.parent||de,$n(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Yu($n(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return cs(0,arguments,this),this},e.from=function(i,s,a){return cs(1,arguments,this),this},e.fromTo=function(i,s,a,o){return cs(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,ls(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Te(i,s,Mn(this,a),1),this},e.call=function(i,s,a){return Fn(this,Te.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Te(i,a,Mn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,ls(a).immediateRender=Ze(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,ls(o).immediateRender=Ze(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ue(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,p,g,_,m,f,T,y,x,b,A,w;if(this!==de&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,x=this._start,y=this._ts,f=!y,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=ue(h%m),h===l?(_=this._repeat,d=c):(b=ue(h/m),_=~~b,_&&_===b&&(d=c,_--),d>c&&(d=c)),b=kr(this._tTime,m),!o&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),A&&_&1&&(d=c-d,w=1),_!==b&&!this._lock){var R=A&&b&1,v=R===(A&&_&1);if(_<b&&(R=!R),o=R?0:h%c?c:h,this._lock=1,this.render(o||(w?0:ue(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&hn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,b=_),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!f)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=Tv(this,ue(o),ue(d)),T&&(h-=d-(d=T._start))),this._tTime=h,this._time=d,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!b&&(hn(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||d>=p._start)&&p._ts&&T!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,a),d!==this._time||!this._ts&&!f){T=0,g&&(h+=this._zTime=-re);break}}p=g}else{p=this._last;for(var M=i<0?i:d;p;){if(g=p._prev,(p._act||M<=p._end)&&p._ts&&T!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(M-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(M-p._start)*p._ts,s,a||De&&Jl(p)),d!==this._time||!this._ts&&!f){T=0,g&&(h+=this._zTime=M?-re:re);break}}p=g}}if(T&&!s&&(this.pause(),T.render(d>=o?0:-re)._zTime=d>=o?1:-1,this._ts))return this._start=x,La(this),this.render(i,s,a);this._onUpdate&&!s&&hn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Mi(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(hn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(ei(s)||(s=Mn(this,s,i)),!(i instanceof vs)){if(ze(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Re(i))return this.addLabel(i,s);if(_e(i))i=Te.delayedCall(0,i);else return this}return this!==i?Fn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-yn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Te?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Re(i)?this.removeLabel(i):_e(i)?this.killTweensOf(i):(i.parent===this&&Ia(this,i),i===this._recent&&(this._recent=this._last),Wi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ue(cn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Mn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Te.delayedCall(0,s||ms,a);return o.data="isPause",this._hasPause=1,Fn(this,o,Mn(this,i))},e.removePause=function(i){var s=this._first;for(i=Mn(this,i);s;)s._start===i&&s.data==="isPause"&&Mi(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)hi!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=En(i),l=this._first,c=ei(s),h;l;)l instanceof Te?gv(l._targets,o)&&(c?(!hi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Mn(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,p,g=Te.to(a,mn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||re,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Gr(g,m,0,1).render(g._time,!0,!0),p=1}h&&h.apply(g,u||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,mn({startAt:{time:Mn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),wh(this,Mn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),wh(this,Mn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+re)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=ue(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Wi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Wi(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=yn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Fn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=ue(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Gr(a,a===de&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(de._ts&&(Hu(de,Ea(i,de)),ku=cn.frame),cn.frame>=yh){yh+=fn.autoSleep||120;var s=de._first;if((!s||!s._ts)&&fn.autoSleep&&cn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||cn.sleep()}}},t})(vs);mn($e.prototype,{_lock:0,_hasPause:0,_forcing:0});var Gv=function(t,e,n,i,s,a,o){var l=new Qe(this._pt,t,e,0,1,pd,null,s),c=0,h=0,u,d,p,g,_,m,f,T;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=_s(i)),a&&(T=[n,i],a(T,t,e),n=T[0],i=T[1]),d=n.match(go)||[];u=go.exec(i);)g=u[0],_=i.substring(c,u.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Cr(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=go.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Nu.test(i)||f)&&(l.e=0),this._pt=l,l},Ql=function(t,e,n,i,s,a,o,l,c,h){_e(i)&&(i=i(s||0,t,a));var u=t[e],d=n!=="get"?n:_e(u)?c?t[e.indexOf("set")||!_e(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,p=_e(u)?c?qv:dd:ec,g;if(Re(i)&&(~i.indexOf("random(")&&(i=_s(i)),i.charAt(1)==="="&&(g=Cr(d,i)+(Ne(d)||0),(g||g===0)&&(i=g))),!h||d!==i||Sl)return!isNaN(d*i)&&i!==""?(g=new Qe(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?$v:fd,0,p),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!u&&!(e in t)&&$l(e,i),Gv.call(this,t,e,d,i,p,l||fn.stringFilter,c))},Hv=function(t,e,n,i,s){if(_e(t)&&(t=hs(t,s,e,n,i)),!kn(t)||t.style&&t.nodeType||ze(t)||Uu(t))return Re(t)?hs(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=hs(t[o],s,e,n,i);return a},cd=function(t,e,n,i,s,a){var o,l,c,h;if(an[t]&&(o=new an[t]).init(s,o.rawVars?e[t]:Hv(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Qe(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Er))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},hi,Sl,tc=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,p=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,f=t.parent,T=f&&f.data==="nested"?f.vars.targets:m,y=t._overwrite==="auto"&&!Wl,x=t.timeline,b=i.easeReverse||u,A,w,R,v,M,P,O,N,z,q,H,Z,V;if(x&&(!d||!s)&&(s="none"),t._ease=Xi(s,fs.ease),t._rEase=b&&(Xi(b)||t._ease),t._from=!x&&!!i.runBackwards,t._from&&(t.ratio=1),!x||d&&!i.stagger){if(N=m[0]?Vi(m[0]).harness:0,Z=N&&i[N.prop],A=ya(i,Kl),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!p?_.render(-1,!0):_.revert(h&&g?ca:mv),_._lazy=0),a){if(Mi(t._startAt=Te.set(m,mn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&Ze(l),startAt:null,delay:0,onUpdate:c&&function(){return hn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(De||!o&&!p)&&t._startAt.revert(ca),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),R=mn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Ze(l),immediateRender:o,stagger:0,parent:f},A),Z&&(R[N.prop]=Z),Mi(t._startAt=Te.set(m,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(De?t._startAt.revert(ca):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,re,re);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Ze(l)||l&&!g,w=0;w<m.length;w++){if(M=m[w],O=M._gsap||Zl(m)[w]._gsap,t._ptLookup[w]=q={},ml[O.id]&&mi.length&&Sa(),H=T===m?w:T.indexOf(M),N&&(z=new N).init(M,Z||A,t,H,T)!==!1&&(t._pt=v=new Qe(t._pt,M,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(nt){q[nt]=v}),z.priority&&(P=1)),!N||Z)for(R in A)an[R]&&(z=cd(R,A,t,H,M,T))?z.priority&&(P=1):q[R]=v=Ql.call(t,M,R,"get",A[R],H,T,0,i.stringFilter);t._op&&t._op[w]&&t.kill(M,t._op[w]),y&&t._pt&&(hi=t,de.killTweensOf(M,q,t.globalTime(e)),V=!t.parent,hi=0),t._pt&&l&&(ml[O.id]=1)}P&&md(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,d&&e<=0&&x.render(yn,!0,!0)},Vv=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,p;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,p=t._targets.length;p--;){if(h=d[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Sl=1,t.vars[e]="+=0",tc(t,o),Sl=0,l?ps(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(p=c.length;p--;)u=c[p],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Me(n)+Ne(u.e)),u.b&&(u.b=h.s+Ne(u.b))},Wv=function(t,e){var n=t[0]?Vi(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=zr({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Xv=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(ze(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},hs=function(t,e,n,i,s){return _e(t)?t.call(e,n,i,s):Re(t)&&~t.indexOf("random(")?_s(t):t},hd=jl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ud={};Je(hd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ud[r]=1});var Te=(function(r){Iu(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ls(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,f=i.parent||de,T=(ze(n)||Uu(n)?ei(n[0]):"length"in i)?[n]:En(n),y,x,b,A,w,R,v,M;if(o._targets=T.length?Zl(T):ps("GSAP target "+n+" not found. https://gsap.com",!fn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||d||ea(c)||ea(h)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(y=o.timeline=new $e({data:"nested",defaults:_||{},targets:f&&f.data==="nested"?f.vars.targets:T}),y.kill(),y.parent=y._dp=$n(o),y._start=0,d||ea(c)||ea(h)){if(A=T.length,v=d&&Zu(d),kn(d))for(w in d)~hd.indexOf(w)&&(M||(M={}),M[w]=d[w]);for(x=0;x<A;x++)b=ya(i,ud),b.stagger=0,P&&(b.easeReverse=P),M&&zr(b,M),R=T[x],b.duration=+hs(c,$n(o),x,R,T),b.delay=(+hs(h,$n(o),x,R,T)||0)-o._delay,!d&&A===1&&b.delay&&(o._delay=h=b.delay,o._start+=h,b.delay=0),y.to(R,b,v?v(x,R,T):0),y._ease=zt.none;y.duration()?c=h=0:o.timeline=0}else if(g){ls(mn(y.vars.defaults,{ease:"none"})),y._ease=Xi(g.ease||i.ease||"none");var O=0,N,z,q;if(ze(g))g.forEach(function(H){return y.to(T,H,">")}),y.duration();else{b={};for(w in g)w==="ease"||w==="easeEach"||Xv(w,g[w],b,g.easeEach);for(w in b)for(N=b[w].sort(function(H,Z){return H.t-Z.t}),O=0,x=0;x<N.length;x++)z=N[x],q={ease:z.e,duration:(z.t-(x?N[x-1].t:0))/100*c},q[w]=z.v,y.to(T,q,O),O+=q.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return p===!0&&!Wl&&(hi=$n(o),de.killTweensOf(T),hi=0),Fn(f,$n(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!g&&o._start===ue(f._time)&&Ze(u)&&Sv($n(o))&&f.data!=="nested")&&(o._tTime=-re,o.render(Math.max(0,-h)||0)),m&&Yu($n(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-re&&!h?l:i<re?0:i,d,p,g,_,m,f,T,y;if(!c)Ev(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(d=ue(u%_),u===l?(g=this._repeat,d=c):(m=ue(u/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),f=this._yoyo&&g&1,f&&(d=c-d),m=kr(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=u,this;g!==m&&this.vars.repeatRefresh&&!f&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(ue(_*g),!0).invalidate()._lock=0)}if(!this._initted){if($u(this,h?i:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var x=d<o;if(x!==this._inv){var b=x?o:c-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(x?-1:1)/b:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=T=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=T=this._ease(d/c);if(this._from&&(this.ratio=T=1-T),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!s&&!m&&(hn(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(T,p.d),p=p._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&_l(this,i,s,a),hn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&hn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&_l(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Mi(this,1),!s&&!(h&&!o)&&(u||o||f)&&(hn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){gs||cn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||tc(this,c),h=this._ease(c/this._dur),Vv(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(Ua(this,0),this.parent||Xu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?as(this):this.scrollTrigger&&this.scrollTrigger.kill(!!De),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,hi&&hi.vars.overwrite!==!0)._first||as(this),this.parent&&a!==this.timeline.totalDuration()&&Gr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?En(i):o,c=this._ptLookup,h=this._pt,u,d,p,g,_,m,f;if((!s||s==="all")&&xv(o,l))return s==="all"&&(this._pt=0),as(this);for(u=this._op=this._op||[],s!=="all"&&(Re(s)&&(_={},Je(s,function(T){return _[T]=1}),s=_),s=Wv(o,s)),f=o.length;f--;)if(~l.indexOf(o[f])){d=c[f],s==="all"?(u[f]=s,g=d,p={}):(p=u[f]=u[f]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ia(this,m,"_pt"),delete d[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&h&&as(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return cs(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return cs(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return de.killTweensOf(i,s,a)},t})(vs);mn(Te.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Je("staggerTo,staggerFrom,staggerFromTo",function(r){Te[r]=function(){var t=new $e,e=vl.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var ec=function(t,e,n){return t[e]=n},dd=function(t,e,n){return t[e](n)},qv=function(t,e,n,i){return t[e](i.fp,n)},Yv=function(t,e,n){return t.setAttribute(e,n)},nc=function(t,e){return _e(t[e])?dd:Xl(t[e])&&t.setAttribute?Yv:ec},fd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},$v=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},pd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},ic=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Kv=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},jv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ia(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Zv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},md=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Qe=(function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||fd,this.d=l||this,this.set=c||ec,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Zv,this.m=n,this.mt=s,this.tween=i},r})();Je(jl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Kl[r]=1});pn.TweenMax=pn.TweenLite=Te;pn.TimelineLite=pn.TimelineMax=$e;de=new $e({sortChildren:!1,defaults:fs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fn.stringFilter=ad;var qi=[],ua={},Jv=[],Ch=0,Qv=0,yo=function(t){return(ua[t]||Jv).map(function(e){return e()})},yl=function(){var t=Date.now(),e=[];t-Ch>2&&(yo("matchMediaInit"),qi.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Dn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),yo("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ch=t,yo("matchMedia"))},_d=(function(){function r(e,n){this.selector=n&&xl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Qv++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){_e(n)&&(s=i,i=n,n=_e);var a=this,o=function(){var c=ce,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=xl(s)),ce=a,u=i.apply(a,arguments),_e(u)&&a._r.push(u),ce=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===_e?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=ce;ce=null,n(this),ce=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Te&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof $e?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Te)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=qi.length;a--;)qi[a].id===this.id&&qi.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),tx=(function(){function r(e){this.contexts=[],this.scope=e,ce&&ce.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){kn(n)||(n={matches:n});var a=new _d(0,s||this.scope),o=a.conditions={},l,c,h;ce&&!a.selector&&(a.selector=ce.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Dn.matchMedia(n[c]),l&&(qi.indexOf(a)<0&&qi.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(yl):l.addEventListener("change",yl)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ta={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return id(i)})},timeline:function(t){return new $e(t)},getTweensOf:function(t,e){return de.getTweensOf(t,e)},getProperty:function(t,e,n,i){Re(t)&&(t=En(t)[0]);var s=Vi(t||{}).get,a=n?Wu:Vu;return n==="native"&&(n=""),t&&(e?a((an[e]&&an[e].get||s)(t,e,n,i)):function(o,l,c){return a((an[o]&&an[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=En(t),t.length>1){var i=t.map(function(h){return en.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=an[e],o=Vi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;Er._pt=0,u.init(t,n?h+n:h,Er,0,[t]),u.render(1,u),Er._pt&&ic(1,Er)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=en.to(t,mn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return de.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Xi(t.ease,fs.ease)),Eh(fs,t||{})},config:function(t){return Eh(fn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!an[o]&&!pn[o]&&ps(e+" effect requires "+o+" plugin.")}),vo[e]=function(o,l,c){return n(En(o),mn(l||{},s),c)},a&&($e.prototype[e]=function(o,l,c){return this.add(vo[e](o,kn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){zt[t]=Xi(e)},parseEase:function(t,e){return arguments.length?Xi(t,e):zt},getById:function(t){return de.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new $e(t),i,s;for(n.smoothChildTiming=Ze(t.smoothChildTiming),de.remove(n),n._dp=0,n._time=n._tTime=de._time,i=de._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Te&&i.vars.onComplete===i._targets[0]))&&Fn(n,i,i._start-i._delay),i=s;return Fn(de,n,0),n},context:function(t,e){return t?new _d(t,e):ce},matchMedia:function(t){return new tx(t)},matchMediaRefresh:function(){return qi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||yl()},addEventListener:function(t,e){var n=ua[t]||(ua[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ua[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Dv,wrapYoyo:Iv,distribute:Zu,random:Qu,snap:Ju,normalize:Pv,getUnit:Ne,clamp:wv,splitColor:rd,toArray:En,selector:xl,mapRange:ed,pipe:Cv,unitize:Rv,interpolate:Lv,shuffle:ju},install:Bu,effects:vo,ticker:cn,updateRoot:$e.updateRoot,plugins:an,globalTimeline:de,core:{PropTween:Qe,globals:zu,Tween:Te,Timeline:$e,Animation:vs,getCache:Vi,_removeLinkedListItem:Ia,reverting:function(){return De},context:function(t){return t&&ce&&(ce.data.push(t),t._ctx=ce),ce},suppressOverwrites:function(t){return Wl=t}}};Je("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ta[r]=Te[r]});cn.add($e.updateRoot);Er=Ta.to({},{duration:0});var ex=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},nx=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=ex(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Eo=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Re(s)&&(l={},Je(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}nx(o,s)}}}},en=Ta.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)De?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Eo("roundProps",Ml),Eo("modifiers"),Eo("snap",Ju))||Ta;Te.version=$e.version=en.version="3.15.0";Ou=1;ql()&&Hr();zt.Power0;zt.Power1;zt.Power2;zt.Power3;zt.Power4;zt.Linear;zt.Quad;zt.Cubic;zt.Quart;zt.Quint;zt.Strong;zt.Elastic;zt.Back;zt.SteppedEase;zt.Bounce;zt.Sine;zt.Expo;zt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Rh,ui,Rr,rc,Gi,Ph,sc,ix=function(){return typeof window<"u"},ni={},Ni=180/Math.PI,Pr=Math.PI/180,xr=Math.atan2,Dh=1e8,ac=/([A-Z])/g,rx=/(left|right|width|margin|padding|x)/i,sx=/[\s,\(]\S/,On={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},El=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ax=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ox=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},lx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},cx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},gd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},vd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},hx=function(t,e,n){return t.style[e]=n},ux=function(t,e,n){return t.style.setProperty(e,n)},dx=function(t,e,n){return t._gsap[e]=n},fx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},px=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},mx=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},fe="transform",tn=fe+"Origin",_x=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in ni&&s){if(this.tfm=this.tfm||{},t!=="transform")t=On[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=jn(i,o)}):this.tfm[t]=a.x?a[t]:jn(i,t),t===tn&&(this.tfm.zOrigin=a.zOrigin);else return On.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(fe)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(tn,e,"")),t=fe}(s||e)&&this.props.push(t,e,s[t])},xd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},gx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(ac,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=sc(),(!s||!s.isStart)&&!n[fe]&&(xd(n),i.zOrigin&&n[tn]&&(n[tn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Md=function(t,e){var n={target:t,props:[],revert:gx,save:_x};return t._gsap||en.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Sd,Tl=function(t,e){var n=ui.createElementNS?ui.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ui.createElement(t);return n&&n.style?n:ui.createElement(t)},un=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ac,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Vr(e)||e,1)||""},Ih="O,Moz,ms,Ms,Webkit".split(","),Vr=function(t,e,n){var i=e||Gi,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Ih[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Ih[a]:"")+t},bl=function(){ix()&&window.document&&(Rh=window,ui=Rh.document,Rr=ui.documentElement,Gi=Tl("div")||{style:{}},Tl("div"),fe=Vr(fe),tn=fe+"Origin",Gi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Sd=!!Vr("perspective"),sc=en.core.reverting,rc=1)},Lh=function(t){var e=t.ownerSVGElement,n=Tl("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Rr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Rr.removeChild(n),s},Uh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},yd=function(t){var e,n;try{e=t.getBBox()}catch{e=Lh(t),n=1}return e&&(e.width||e.height)||n||(e=Lh(t)),e&&!e.width&&!e.x&&!e.y?{x:+Uh(t,["x","cx","x1"])||0,y:+Uh(t,["y","cy","y1"])||0,width:0,height:0}:e},Ed=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&yd(t))},Si=function(t,e){if(e){var n=t.style,i;e in ni&&e!==tn&&(e=fe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(ac,"-$1").toLowerCase())):n.removeAttribute(e)}},di=function(t,e,n,i,s,a){var o=new Qe(t._pt,e,n,0,1,a?vd:gd);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Fh={deg:1,rad:1,turn:1},vx={grid:1,flex:1},yi=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Gi.style,l=rx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",p=i==="%",g,_,m,f;if(i===a||!s||Fh[i]||Fh[a])return s;if(a!=="px"&&!d&&(s=r(t,e,n,"px")),f=t.getCTM&&Ed(t),(p||a==="%")&&(ni[e]||~e.indexOf("adius")))return g=f?t.getBBox()[l?"width":"height"]:t[h],Me(p?s/g*u:s/100*g);if(o[l?"width":"height"]=u+(d?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,f&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ui||!_.appendChild)&&(_=ui.body),m=_._gsap,m&&p&&m.width&&l&&m.time===cn.time&&!m.uncache)return Me(s/m.width*u);if(p&&(e==="height"||e==="width")){var T=t.style[e];t.style[e]=u+i,g=t[h],T?t.style[e]=T:Si(t,e)}else(p||a==="%")&&!vx[un(_,"display")]&&(o.position=un(t,"position")),_===t&&(o.position="static"),_.appendChild(Gi),g=Gi[h],_.removeChild(Gi),o.position="absolute";return l&&p&&(m=Vi(_),m.time=cn.time,m.width=_[h]),Me(d?g*s/u:g&&s?u/g*s:0)},jn=function(t,e,n,i){var s;return rc||bl(),e in On&&e!=="transform"&&(e=On[e],~e.indexOf(",")&&(e=e.split(",")[0])),ni[e]&&e!=="transform"?(s=Ms(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:wa(un(t,tn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ba[e]&&ba[e](t,e,n)||un(t,e)||Gu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?yi(t,e,s,n)+n:s},xx=function(t,e,n,i){if(!n||n==="none"){var s=Vr(e,t,1),a=s&&un(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=un(t,"borderTopColor"))}var o=new Qe(this._pt,t.style,e,0,1,pd),l=0,c=0,h,u,d,p,g,_,m,f,T,y,x,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=un(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=un(t,e)||i,_?t.style[e]=_:Si(t,e)),h=[n,i],ad(h),n=h[0],i=h[1],d=n.match(yr)||[],b=i.match(yr)||[],b.length){for(;u=yr.exec(i);)m=u[0],T=i.substring(l,u.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(p=parseFloat(_)||0,x=_.substr((p+"").length),m.charAt(1)==="="&&(m=Cr(p,m)+x),f=parseFloat(m),y=m.substr((f+"").length),l=yr.lastIndex-y.length,y||(y=y||fn.units[e]||x,l===i.length&&(i+=y,o.e+=y)),x!==y&&(p=yi(t,e,_,y)||0),o._pt={_next:o._pt,p:T||c===1?T:",",s:p,c:f-p,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?vd:gd;return Nu.test(i)&&(o.e=0),this._pt=o,o},Nh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Mx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Nh[n]||n,e[1]=Nh[i]||i,e.join(" ")},Sx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ni[o]&&(l=1,o=o==="transformOrigin"?tn:fe),Si(n,o);l&&(Si(n,fe),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ms(n,1),a.uncache=1,xd(i)))}},ba={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Qe(t._pt,e,n,0,0,Sx);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},xs=[1,0,0,1,0,0],Td={},bd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Oh=function(t){var e=un(t,fe);return bd(e)?xs:e.substr(7).match(Fu).map(Me)},oc=function(t,e){var n=t._gsap||Vi(t),i=t.style,s=Oh(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?xs:s):(s===xs&&!t.offsetParent&&t!==Rr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Rr.appendChild(t)),s=Oh(t),l?i.display=l:Si(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Rr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},wl=function(t,e,n,i,s,a){var o=t._gsap,l=s||oc(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],f=l[4],T=l[5],y=e.split(" "),x=parseFloat(y[0])||0,b=parseFloat(y[1])||0,A,w,R,v;n?l!==xs&&(w=p*m-g*_)&&(R=x*(m/w)+b*(-_/w)+(_*T-m*f)/w,v=x*(-g/w)+b*(p/w)-(p*T-g*f)/w,x=R,b=v):(A=yd(t),x=A.x+(~y[0].indexOf("%")?x/100*A.width:x),b=A.y+(~(y[1]||y[0]).indexOf("%")?b/100*A.height:b)),i||i!==!1&&o.smooth?(f=x-c,T=b-h,o.xOffset=u+(f*p+T*_)-f,o.yOffset=d+(f*g+T*m)-T):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=b,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[tn]="0px 0px",a&&(di(a,o,"xOrigin",c,x),di(a,o,"yOrigin",h,b),di(a,o,"xOffset",u,o.xOffset),di(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+b)},Ms=function(t,e){var n=t._gsap||new ld(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=un(t,tn)||"0",h,u,d,p,g,_,m,f,T,y,x,b,A,w,R,v,M,P,O,N,z,q,H,Z,V,nt,lt,_t,At,$t,X,tt;return h=u=d=_=m=f=T=y=x=0,p=g=1,n.svg=!!(t.getCTM&&Ed(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[fe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[fe]!=="none"?l[fe]:"")),i.scale=i.rotate=i.translate="none"),w=oc(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Z=""):Z=!e&&t.getAttribute("data-svg-origin"),wl(t,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,w)),b=n.xOrigin||0,A=n.yOrigin||0,w!==xs&&(P=w[0],O=w[1],N=w[2],z=w[3],h=q=w[4],u=H=w[5],w.length===6?(p=Math.sqrt(P*P+O*O),g=Math.sqrt(z*z+N*N),_=P||O?xr(O,P)*Ni:0,T=N||z?xr(N,z)*Ni+_:0,T&&(g*=Math.abs(Math.cos(T*Pr))),n.svg&&(h-=b-(b*P+A*N),u-=A-(b*O+A*z))):(tt=w[6],$t=w[7],lt=w[8],_t=w[9],At=w[10],X=w[11],h=w[12],u=w[13],d=w[14],R=xr(tt,At),m=R*Ni,R&&(v=Math.cos(-R),M=Math.sin(-R),Z=q*v+lt*M,V=H*v+_t*M,nt=tt*v+At*M,lt=q*-M+lt*v,_t=H*-M+_t*v,At=tt*-M+At*v,X=$t*-M+X*v,q=Z,H=V,tt=nt),R=xr(-N,At),f=R*Ni,R&&(v=Math.cos(-R),M=Math.sin(-R),Z=P*v-lt*M,V=O*v-_t*M,nt=N*v-At*M,X=z*M+X*v,P=Z,O=V,N=nt),R=xr(O,P),_=R*Ni,R&&(v=Math.cos(R),M=Math.sin(R),Z=P*v+O*M,V=q*v+H*M,O=O*v-P*M,H=H*v-q*M,P=Z,q=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,f=180-f),p=Me(Math.sqrt(P*P+O*O+N*N)),g=Me(Math.sqrt(H*H+tt*tt)),R=xr(q,H),T=Math.abs(R)>2e-4?R*Ni:0,x=X?1/(X<0?-X:X):0),n.svg&&(Z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!bd(un(t,fe)),Z&&t.setAttribute("transform",Z))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(p*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Me(p),n.scaleY=Me(g),n.rotation=Me(_)+o,n.rotationX=Me(m)+o,n.rotationY=Me(f)+o,n.skewX=T+o,n.skewY=y+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[tn]=wa(c)),n.xOffset=n.yOffset=0,n.force3D=fn.force3D,n.renderTransform=n.svg?Ex:Sd?wd:yx,n.uncache=0,n},wa=function(t){return(t=t.split(" "))[0]+" "+t[1]},To=function(t,e,n){var i=Ne(e);return Me(parseFloat(e)+parseFloat(yi(t,"x",n+"px",i)))+i},yx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,wd(t,e)},Ii="0deg",rs="0px",Li=") ",wd=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,f=n.force3D,T=n.target,y=n.zOrigin,x="",b=f==="auto"&&t&&t!==1||f===!0;if(y&&(u!==Ii||h!==Ii)){var A=parseFloat(h)*Pr,w=Math.sin(A),R=Math.cos(A),v;A=parseFloat(u)*Pr,v=Math.cos(A),a=To(T,a,w*v*-y),o=To(T,o,-Math.sin(A)*-y),l=To(T,l,R*v*-y+y)}m!==rs&&(x+="perspective("+m+Li),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(b||a!==rs||o!==rs||l!==rs)&&(x+=l!==rs||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Li),c!==Ii&&(x+="rotate("+c+Li),h!==Ii&&(x+="rotateY("+h+Li),u!==Ii&&(x+="rotateX("+u+Li),(d!==Ii||p!==Ii)&&(x+="skew("+d+", "+p+Li),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Li),T.style[fe]=x||"translate(0, 0)"},Ex=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,f=n.yOffset,T=n.forceCSS,y=parseFloat(a),x=parseFloat(o),b,A,w,R,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Pr,c*=Pr,b=Math.cos(l)*u,A=Math.sin(l)*u,w=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=Pr,v=Math.tan(c-h),v=Math.sqrt(1+v*v),w*=v,R*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),b*=v,A*=v)),b=Me(b),A=Me(A),w=Me(w),R=Me(R)):(b=u,R=d,A=w=0),(y&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(y=yi(p,"x",a,"px"),x=yi(p,"y",o,"px")),(g||_||m||f)&&(y=Me(y+g-(g*b+_*w)+m),x=Me(x+_-(g*A+_*R)+f)),(i||s)&&(v=p.getBBox(),y=Me(y+i/100*v.width),x=Me(x+s/100*v.height)),v="matrix("+b+","+A+","+w+","+R+","+y+","+x+")",p.setAttribute("transform",v),T&&(p.style[fe]=v)},Tx=function(t,e,n,i,s){var a=360,o=Re(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ni:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Dh)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Dh)%a-~~(c/a)*a)),t._pt=d=new Qe(t._pt,e,n,i,c,ax),d.e=h,d.u="deg",t._props.push(n),d},Bh=function(t,e){for(var n in e)t[n]=e[n];return t},bx=function(t,e,n){var i=Bh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[fe]=e,o=Ms(n,1),Si(n,fe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[fe],a[fe]=e,o=Ms(n,1),a[fe]=c);for(l in ni)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(p=Ne(c),g=Ne(h),u=p!==g?yi(n,l,c,g):parseFloat(c),d=parseFloat(h),t._pt=new Qe(t._pt,o,l,u,d-u,El),t._pt.u=g||0,t._props.push(l));Bh(o,i)};Je("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});ba[t>1?"border"+r:r]=function(o,l,c,h,u){var d,p;if(arguments.length<4)return d=a.map(function(g){return jn(o,g,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},a.forEach(function(g,_){return p[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,p,u)}});var Ad={name:"css",register:bl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,d,p,g,_,m,f,T,y,x,b,A,w,R,v;rc||bl(),this.styles=this.styles||Md(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(an[_]&&cd(_,e,n,i,t,s)))){if(p=typeof h,g=ba[_],p==="function"&&(h=h.call(n,i,t,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=_s(h)),g)g(this,t,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",_i.lastIndex=0,_i.test(c)||(m=Ne(c),f=Ne(h),f?m!==f&&(c=yi(t,_,c,f)+f):m&&(h+=m)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),R.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Re(c)&&~c.indexOf("random(")&&(c=_s(c)),Ne(c+"")||c==="auto"||(c+=fn.units[_]||Ne(jn(t,_))||""),(c+"").charAt(1)==="="&&(c=jn(t,_))):c=jn(t,_),d=parseFloat(c),T=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),T&&(h=h.substr(2)),u=parseFloat(h),_ in On&&(_==="autoAlpha"&&(d===1&&jn(t,"visibility")==="hidden"&&u&&(d=0),R.push("visibility",0,o.visibility),di(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=On[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in ni,y){if(this.styles.save(_),v=h,p==="string"&&h.substring(0,6)==="var(--"){if(h=un(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var M=t.style.perspective;t.style.perspective=h,h=un(t,"perspective"),M?t.style.perspective=M:Si(t,"perspective")}u=parseFloat(h)}if(x||(b=t._gsap,b.renderTransform&&!e.parseTransform||Ms(t,e.parseTransform),A=e.smoothOrigin!==!1&&b.smooth,x=this._pt=new Qe(this._pt,o,fe,0,1,b.renderTransform,b,0,-1),x.dep=1),_==="scale")this._pt=new Qe(this._pt,b,"scaleY",b.scaleY,(T?Cr(b.scaleY,T+u):u)-b.scaleY||0,El),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(tn,0,o[tn]),h=Mx(h),b.svg?wl(t,h,0,A,0,this):(f=parseFloat(h.split(" ")[2])||0,f!==b.zOrigin&&di(this,b,"zOrigin",b.zOrigin,f),di(this,o,_,wa(c),wa(h)));continue}else if(_==="svgOrigin"){wl(t,h,1,A,0,this);continue}else if(_ in Td){Tx(this,b,_,d,T?Cr(d,T+h):h);continue}else if(_==="smoothOrigin"){di(this,b,"smooth",b.smooth,h);continue}else if(_==="force3D"){b[_]=h;continue}else if(_==="transform"){bx(this,h,t);continue}}else _ in o||(_=Vr(_)||_);if(y||(u||u===0)&&(d||d===0)&&!sx.test(h)&&_ in o)m=(c+"").substr((d+"").length),u||(u=0),f=Ne(h)||(_ in fn.units?fn.units[_]:m),m!==f&&(d=yi(t,_,c,f)),this._pt=new Qe(this._pt,y?b:o,_,d,(T?Cr(d,T+u):u)-d,!y&&(f==="px"||_==="zIndex")&&e.autoRound!==!1?cx:El),this._pt.u=f||0,y&&v!==h?(this._pt.b=c,this._pt.e=v,this._pt.r=lx):m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=ox);else if(_ in o)xx.call(this,t,_,c,T?T+h:h);else if(_ in t)this.add(t,_,c||t[_],T?T+h:h,i,s);else if(_!=="parseTransform"){$l(_,h);continue}y||(_ in o?R.push(_,0,o[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,c||t[_])),a.push(_)}}w&&md(this)},render:function(t,e){if(e.tween._time||!sc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:jn,aliases:On,getSetter:function(t,e,n){var i=On[e];return i&&i.indexOf(",")<0&&(e=i),e in ni&&e!==tn&&(t._gsap.x||jn(t,"x"))?n&&Ph===n?e==="scale"?fx:dx:(Ph=n||{})&&(e==="scale"?px:mx):t.style&&!Xl(t.style[e])?hx:~e.indexOf("-")?ux:nc(t,e)},core:{_removeProperty:Si,_getMatrix:oc}};en.utils.checkPrefix=Vr;en.core.getStyleSaver=Md;(function(r,t,e,n){var i=Je(r+","+t+","+e,function(s){ni[s]=1});Je(t,function(s){fn.units[s]="deg",Td[s]=1}),On[i[13]]=r+","+t,Je(n,function(s){var a=s.split(":");On[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Je("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){fn.units[r]="px"});en.registerPlugin(Ad);var We=en.registerPlugin(Ad)||en;We.core.Tween;class wx{constructor(t){$(this,"camera");$(this,"globalPosition",new I(0,5.6,11.5));$(this,"globalLookAt",new I(0,2,-3.2));$(this,"lookTarget",new I(0,2,-3.2));$(this,"animating",!1);$(this,"focusHold",null);$(this,"timeline",null);this.camera=new Ye(46,t,.1,200),this.camera.position.copy(this.globalPosition),this.camera.lookAt(this.lookTarget)}isAnimating(){return this.animating}getMode(){return this.animating?"FOCUS_CHARACTER":"GLOBAL_VIEW"}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}update(){this.camera.lookAt(this.lookTarget)}focusCharacter(t,e=2.5,n=1){console.log(`[CAMERA] Focus ${t.data.id} (drama=${n})`);const i=t.data.position;return this.focusPoint(i.x,i.y+1.35,i.z,e,n)}focusPoint(t,e,n,i=2.5,s=1){var c,h;(c=this.timeline)==null||c.kill(),(h=this.focusHold)==null||h.kill();const a=s===2,o={x:t+(a?.45:.95),y:e+(a?.35:.55),z:n+(a?2.45:3.25)},l={x:t,y:e,z:n};return this.animating=!0,new Promise(u=>{const d=We.timeline({onComplete:()=>{this.focusHold=We.delayedCall(i,()=>{this.resetToGlobal().then(u)})}});this.timeline=d;const p=a?1:1.15;d.to(this.camera.position,{x:o.x,y:o.y,z:o.z,duration:p,ease:"power2.inOut"},0),d.to(this.lookTarget,{x:l.x,y:l.y,z:l.z,duration:p,ease:"power2.inOut"},0)})}resetToGlobal(){var t,e;return(t=this.focusHold)==null||t.kill(),this.focusHold=null,(e=this.timeline)==null||e.kill(),this.animating=!0,new Promise(n=>{const i=We.timeline({onComplete:()=>{this.animating=!1,this.timeline=null,n()}});this.timeline=i,i.to(this.camera.position,{x:this.globalPosition.x,y:this.globalPosition.y,z:this.globalPosition.z,duration:1,ease:"power2.inOut"},0),i.to(this.lookTarget,{x:this.globalLookAt.x,y:this.globalLookAt.y,z:this.globalLookAt.z,duration:1,ease:"power2.inOut"},0)})}snapToGlobal(){var t,e;(t=this.timeline)==null||t.kill(),(e=this.focusHold)==null||e.kill(),this.timeline=null,this.focusHold=null,this.camera.position.copy(this.globalPosition),this.lookTarget.copy(this.globalLookAt),this.animating=!1}}function Ax(r){r.add(new Sp(3813472,.42)),r.add(new gp(11057384,2766880,.55));const t=new $c(13162751,.35);t.position.set(-4,12,2),r.add(t);const e=new $c(16771272,.35);e.position.set(2,8,6),r.add(e);const n=new Zs(16773336,14,32,.62,.28,1.2);n.position.set(0,9.5,2.2),n.target.position.set(0,1.5,-5),r.add(n),r.add(n.target);const i=new Zs(16723338,10,26,.48,.4,1.4);i.position.set(-6,8.5,1),i.target.position.set(0,1.2,-1),r.add(i),r.add(i.target);const s=new Zs(3006719,10,26,.48,.4,1.4);s.position.set(6,8.5,1),s.target.position.set(0,1.2,-1),r.add(s),r.add(s.target);const a=new Zs(16769126,8,24,.42,.45,1.5);a.position.set(0,9,-1),a.target.position.set(0,.8,2),r.add(a),r.add(a.target);const o=new Kn(16732067,5,20,1.8);o.position.set(-5.5,4.8,-.5),r.add(o);const l=new Kn(5230847,5,20,1.8);l.position.set(5.5,4.8,-.5),r.add(l);const c=new Kn(16756832,4.5,16,1.8);c.position.set(0,5.8,1.5),r.add(c);const h=new Kn(11561983,3,14,2);h.position.set(-3.5,3.2,3),r.add(h);const u=new Kn(16747082,3,14,2);u.position.set(3.5,3.2,3),r.add(u);const d=new Kn(16732067,4,16,2);d.position.set(0,6.5,-6.2),r.add(d);const p=[new wt(16723338),new wt(3006719),new wt(16769126),new wt(11561983),new wt(8191920),new wt(16747082)];return{update(g){const _=g*(2.1333333333333333*Math.PI),m=Math.abs(Math.sin(_)),f=m>.82?1:m*m,T=Math.abs(Math.sin(_*.5)),y=Math.abs(Math.sin(_+Math.PI*.5));n.intensity=10+f*8,n.color.setHSL(.08+T*.04,.45,.82+f*.1);const x=Math.sin(_)>0;o.intensity=x?3.5+f*5:.6+y*1.2,l.intensity=x?.6+y*1.2:3.5+f*5,o.color.copy(p[Math.floor(g*.4)%p.length]),l.color.copy(p[(Math.floor(g*.4)+2)%p.length]);const b=Math.sin(g*1.35)*4.5;i.target.position.set(b,1,-1+Math.sin(g*.9)*2),s.target.position.set(-b,1,-1+Math.cos(g*.9)*2),a.target.position.set(Math.sin(g*1.1)*3,.6,1.5+Math.cos(g*.8)*2),i.intensity=6+f*10,s.intensity=6+f*10,a.intensity=4+y*8,i.color.copy(p[Math.floor(g*.55)%p.length]),s.color.copy(p[(Math.floor(g*.55)+3)%p.length]),a.color.copy(p[(Math.floor(g*.7)+1)%p.length]),c.intensity=2.2+f*5.5,c.color.setHSL(g*.12%1,.9,.52+f*.2),c.position.x=Math.sin(g*.8)*2.2,h.intensity=1.5+(x?f*6:y*2),u.intensity=1.5+(x?y*2:f*6),h.color.copy(p[Math.floor(g*.9)%p.length]),u.color.copy(p[(Math.floor(g*.9)+3)%p.length]),d.intensity=2.5+f*4.5,d.color.setHSL(.92+T*.08,.95,.55+f*.2)}}}const bo=80,zh=30,Cx=4,Cd=512,Rx=["/characters/char_01.png","/characters/char_02.png","/characters/char_03.png","/characters/char_04.png","/characters/char_05.png","/characters/char_06.png","/characters/char_07.png","/characters/char_08.png"],kh=["#FF3D7A","#3D9FFF","#B06BFF","#FFB020","#2EE6A6","#FF4D6D","#FFE14A","#5CE1FF"];let Hi=[],da=[],Aa=null,Ca=!1;function Px(r){if(!Ca||Hi.length===0)throw new Error("Character art not preloaded");return Hi[r%Hi.length]}function Dx(r){if(!Ca||da.length===0)throw new Error("Character art not preloaded");return da[r%da.length]}function Ix(r){return kh[r%kh.length]}function Lx(){if(!Aa)throw new Error("DJ art not preloaded");return Aa}async function Ux(){if(Ca)return;const r=[];for(const t of Rx)try{r.push(await Gh(t))}catch(e){console.error(`[CHARACTER] missing art ${t}`,e)}if(r.length===0)throw new Error("No character PNGs found in /public/characters/");Hi=r.map(t=>Hh(t)),da=Hi.map(t=>new Ki({map:t,transparent:!0,depthTest:!0,depthWrite:!1,alphaTest:.08}));try{const t=await Gh("/characters/dj.png");Aa=Hh(t)}catch(t){console.error("[CHARACTER] missing dj.png — using first patron",t),Aa=Hi[0]}Ca=!0,console.log(`[CHARACTER] loaded ${Hi.length} patrons + DJ (<=${Cd}px)`)}function Gh(r){return new Promise((t,e)=>{const n=new Image;n.decoding="async",n.onload=()=>t(n),n.onerror=()=>e(new Error(`Failed to load ${r}`)),n.src=r})}function Hh(r){const t=r.naturalWidth||r.width,e=r.naturalHeight||r.height,n=Math.min(1,Cd/Math.max(t,e)),i=Math.max(1,Math.round(t*n)),s=Math.max(1,Math.round(e*n)),a=document.createElement("canvas");a.width=i,a.height=s;const o=a.getContext("2d",{willReadFrequently:!0});if(!o)throw new Error("2D canvas unavailable");o.drawImage(r,0,0,i,s);const l=o.getImageData(0,0,i,s),c=l.data;for(let u=0;u<c.length;u+=4){const d=c[u],p=c[u+1],g=c[u+2],_=Math.max(d,g);if(p>90&&p>_*1.35&&p-_>30){c[u+3]=0;continue}if(p>70&&p>_*1.15&&p-_>18){const m=Math.min(1,(p-_-18)/40);c[u+3]=Math.round(c[u+3]*(1-m))}}o.putImageData(l,0,0);const h=new Ie(a);return h.colorSpace=se,h.anisotropy=1,h.generateMipmaps=!1,h.minFilter=Ke,h.magFilter=Ke,h.needsUpdate=!0,h}const be=1.35;class Fx{constructor(){$(this,"root",new Oe);$(this,"djVisual");$(this,"deckMats",[]);$(this,"eqLights",[]);$(this,"fasciaMats",[]);$(this,"djBaseY");$(this,"hypeUntil",0);this.root.name="DjBooth",this.root.position.set(0,0,-5.4),this.addPlatform(),this.addFascia(),this.addDesk(),this.addDecks(),this.addMonitors(),this.djBaseY=be+1.2,this.djVisual=this.addDjSprite()}update(t){const e=performance.now()<this.hypeUntil,n=t*(128/60*Math.PI),i=Math.abs(Math.sin(n)),s=i>.82?1:i,o=Math.sin(t*(e?9:6.5))*(e?.09:.05);this.djVisual.position.y=this.djBaseY+o,this.djVisual.rotation.z=Math.sin(n)*(e?.12:.06),this.djVisual.rotation.y=Math.sin(n*.5)*.05;for(let l=0;l<this.deckMats.length;l++){const c=Math.sin(n*2+l*2)>-.2;this.deckMats[l].emissiveIntensity=c?e?2.4:1.6:.3}for(let l=0;l<this.eqLights.length;l++){const c=this.eqLights[l].material,h=.06+(Math.sin(n*3.2+l*1.7)*.5+.5)*(e?.7:.5);this.eqLights[l].scale.y=h/.08,this.eqLights[l].position.y=be+.52+h/2,c.emissiveIntensity=Math.sin(n*4+l)>0?2.2:.4}for(let l=0;l<this.fasciaMats.length;l++){const c=Math.abs(Math.sin(n*2+l*.85));this.fasciaMats[l].emissiveIntensity=.45+c*(1.4+s*1.2),this.fasciaMats[l].emissive.setHSL((t*.18+l*.11)%1,.95,.5)}}requestBeat(t=4){this.hypeUntil=performance.now()+t*1e3}addPlatform(){const t=new Tt(new Ee(9.2,be,3.6),new Jt({color:1709344,roughness:.55,metalness:.25,emissive:1181720,emissiveIntensity:.25}));t.position.set(0,be/2,-.35),this.root.add(t);const e=new Tt(new Ee(9.15,.06,3.55),new Jt({color:2761784,roughness:.22,metalness:.55,emissive:1708080,emissiveIntensity:.2}));e.position.set(0,be+.02,-.35),this.root.add(e);const n=new Jt({color:13685984,metalness:.95,roughness:.18});for(const s of[1.4,-2.1]){const a=new Tt(new Ee(9.3,.06,.08),n);a.position.set(0,be+.05,s),this.root.add(a)}for(const s of[-4.55,4.55]){const a=new Tt(new Ee(.08,.06,3.6),n);a.position.set(s,be+.05,-.35),this.root.add(a)}const i=new Jt({color:1183768,roughness:.5,metalness:.35,emissive:16723338,emissiveIntensity:.2});for(const s of[-5.35,5.35]){const a=new Tt(new Ee(1.3,be*.85,2.4),i);a.position.set(s,be*.85/2,-.2),this.root.add(a)}}addFascia(){const t=[16723338,3006719,16769126,11561983,16747082,8191920],e=10,n=8.6/e;for(let s=0;s<e;s++){const a=new Jt({color:1052696,emissive:t[s%t.length],emissiveIntensity:.9,roughness:.25,metalness:.5});this.fasciaMats.push(a);const o=new Tt(new Ee(n*.92,be*.78,.08),a);o.position.set(-4.1+n*(s+.5),be*.42,1.42),this.root.add(o)}const i=new Tt(new Ee(9,.08,.1),new Jt({color:16723338,emissive:16723338,emissiveIntensity:1.4}));this.deckMats.push(i.material),i.position.set(0,be+.04,1.45),this.root.add(i)}addDesk(){const t=be,e=new Tt(new Ee(2.9,.38,.78),new Jt({color:1183770,roughness:.35,metalness:.55}));e.position.set(0,t+.22,-.25),this.root.add(e);const n=new Tt(new Ee(3,.05,.85),new Jt({color:657424,roughness:.15,metalness:.8}));n.position.set(0,t+.42,-.25),this.root.add(n);const i=new Tt(new Ee(2.85,.04,.7),new Jt({color:3006719,emissive:3006719,emissiveIntensity:1.1}));this.deckMats.push(i.material),i.position.set(0,t+.02,-.25),this.root.add(i)}addDecks(){const t=be+.46;for(const n of[-.75,.75]){const i=new Jt({color:1841704,emissive:n<0?16723338:3006719,emissiveIntensity:.7,metalness:.65,roughness:.25});this.deckMats.push(i);const s=new Tt(new xi(.26,.26,.05,24),i);s.position.set(n,t,-.05),this.root.add(s);const a=new Tt(new Gl(.22,.015,8,24),new Jt({color:15265016,metalness:.9,roughness:.2,emissive:n<0?16723338:3006719,emissiveIntensity:.35}));a.rotation.x=Math.PI/2,a.position.set(n,t+.03,-.05),this.root.add(a)}const e=[16723338,16769126,3006719,11992891,16747082];for(let n=0;n<5;n++){const i=new Jt({color:e[n],emissive:e[n],emissiveIntensity:.9}),s=new Tt(new Ee(.07,.08,.07),i);s.position.set(-.22+n*.11,be+.55,-.48),this.eqLights.push(s),this.root.add(s)}}addMonitors(){const t=new Jt({color:1446430,roughness:.45,metalness:.4});for(const e of[-1.85,1.85]){const n=new Tt(new Ee(.5,.58,.42),t);n.position.set(e,be+.38,-.45),this.root.add(n);const i=new Tt(new ds(.16,20),new Jt({color:2762816,emissive:5230847,emissiveIntensity:.45,metalness:.5,roughness:.4}));i.position.set(e,be+.42,-.22),this.root.add(i)}for(const e of[-3.5,3.5]){const n=new Tt(new Ee(.85,.95,.7),new Jt({color:1314844,roughness:.55,metalness:.3,emissive:1708080,emissiveIntensity:.25}));n.position.set(e,be+.48,.15),this.root.add(n);const i=new Tt(new ds(.28,20),new Jt({color:2236467,emissive:16732067,emissiveIntensity:.3}));i.position.set(e,be+.55,.52),this.root.add(i)}}addDjSprite(){const t=new Oe,e=new Br(new Ki({map:Lx(),transparent:!0,depthTest:!0,depthWrite:!1,alphaTest:.08}));e.scale.set(1.95,2.5,1),t.add(e);const n=document.createElement("canvas");n.width=240,n.height=64;const i=n.getContext("2d");if(i){i.fillStyle="rgba(10,6,18,0.85)",i.beginPath(),i.roundRect(8,12,224,40,12),i.fill(),i.strokeStyle="#FF4FA3",i.lineWidth=2,i.stroke(),i.fillStyle="#FFF8EE",i.font="bold 22px Segoe UI, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("DJ MEME",120,34);const s=new Ie(n);s.colorSpace=se;const a=new Br(new Ki({map:s,transparent:!0,depthTest:!0}));a.scale.set(1.3,.35,1),a.position.set(0,1.28,.02),t.add(a)}return t.position.set(0,this.djBaseY,.7),this.root.add(t),t}}class Nx{constructor(){$(this,"root",new Oe);$(this,"spin");$(this,"tileMats",[]);$(this,"rayMats",[]);$(this,"spot");this.root.name="DiscoBall",this.root.position.set(0,8.35,.15),this.addMotorAndCord(),this.spin=new Oe,this.spin.position.y=-1.35,this.root.add(this.spin);const t=Ox();this.addMirrorSphere(t),this.addLightShafts(),this.spot=new Kn(16774632,3.2,12,2),this.spin.add(this.spot)}update(t){const e=t*(2.1333333333333333*Math.PI),n=Math.abs(Math.sin(e)),i=n>.82?1:n;if(this.spin.rotation.y=t*1.15,this.spin.rotation.z=Math.sin(t*.55)*.08,this.spot.intensity=3.5+i*4.5,this.spot.color.setHSL(t*.2%1,.55,.75+i*.15),this.rayMats[0]){const s=.22+i*.35+(Math.sin(t*4)*.5+.5)*.15;for(let a=0;a<this.rayMats.length;a++)this.rayMats[a].opacity=s}}addMotorAndCord(){const t=new Jt({color:14212584,metalness:1,roughness:.18}),e=new Tt(new xi(.12,.14,.1,16),t);e.position.y=.02,this.root.add(e);const n=new Tt(new xi(.012,.012,1.05,8),new Jt({color:11581640,metalness:.9,roughness:.25}));n.position.y=-.55,this.root.add(n);const i=new Tt(new Ar(.12,16,12,0,Math.PI*2,0,Math.PI*.5),t);i.position.y=-1.12,this.root.add(i)}addMirrorSphere(t){const e=new Tt(new Ar(.52,32,24),new Jt({color:1711138,metalness:.8,roughness:.4}));this.spin.add(e);const n=new Jt({color:16054271,metalness:1,roughness:.08,envMap:t,envMapIntensity:1.6,emissive:8952251,emissiveIntensity:.2}),i=new Jt({color:16771264,metalness:1,roughness:.12,envMap:t,envMapIntensity:1.4,emissive:11176038,emissiveIntensity:.18});this.tileMats.push(n,i);const s=12,a=24,o=.545,l=Math.PI*2/a*o*.92,c=Math.PI/s*o*.92,h=new ln(l,c),u=new I(0,0,1),d=[],p=[];for(let f=0;f<s;f++){const T=f/s,y=(f+1)/s,x=(T+y)*.5*Math.PI;for(let b=0;b<a;b++){const w=(b+.5)/a*Math.PI*2,R=new I(o*Math.sin(x)*Math.cos(w),o*Math.cos(x),o*Math.sin(x)*Math.sin(w));if(Math.abs(R.y)>o*.92)continue;const v=new ge;v.position.copy(R),v.quaternion.setFromUnitVectors(u,R.clone().normalize()),v.updateMatrix(),(f+b)%5===0?p.push(v):d.push(v)}}const g=new Hc(h,n,d.length);d.forEach((f,T)=>g.setMatrixAt(T,f.matrix)),g.instanceMatrix.needsUpdate=!0,this.spin.add(g);const _=new Hc(h,i,p.length);p.forEach((f,T)=>_.setMatrixAt(T,f.matrix)),_.instanceMatrix.needsUpdate=!0,this.spin.add(_);const m=new Tt(new Ar(.62,24,16),new Pn({color:13162751,transparent:!0,opacity:.1,blending:Bn,depthWrite:!1}));this.spin.add(m)}addLightShafts(){const t=Bx(),e=[16777215,16761056,11069695,16769184];for(let n=0;n<4;n++){const i=new Pn({map:t,color:e[n%e.length],transparent:!0,opacity:.16,blending:Bn,depthWrite:!1,depthTest:!0,side:on});this.rayMats.push(i);const s=new Tt(new ln(.22,2.4),i);s.position.y=-1;const a=new Oe;a.rotation.set(.25+n%2*.1,n/4*Math.PI*2,0),a.add(s),this.spin.add(a)}}}function Ox(){const r=document.createElement("canvas");r.width=256,r.height=128;const t=r.getContext("2d"),e=t.createLinearGradient(0,0,0,128);e.addColorStop(0,"#1a1028"),e.addColorStop(.35,"#ff4fa3"),e.addColorStop(.55,"#2de0ff"),e.addColorStop(.75,"#ffb060"),e.addColorStop(1,"#120810"),t.fillStyle=e,t.fillRect(0,0,256,128);for(const[i,s,a,o]of[[60,40,28,"rgba(255,255,255,0.85)"],[150,50,22,"rgba(255,220,180,0.7)"],[210,70,30,"rgba(180,240,255,0.75)"]]){const l=t.createRadialGradient(i,s,0,i,s,a);l.addColorStop(0,o),l.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=l,t.fillRect(0,0,256,128)}const n=new Ie(r);return n.colorSpace=se,n.mapping=fa,n.needsUpdate=!0,n}function Bx(){const r=document.createElement("canvas");r.width=64,r.height=256;const t=r.getContext("2d"),e=t.createLinearGradient(32,0,32,256);e.addColorStop(0,"rgba(255,255,255,0.9)"),e.addColorStop(.15,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,256);const n=t.createLinearGradient(0,0,64,0);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.5,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.globalCompositeOperation="destination-in",t.fillStyle=n,t.fillRect(0,0,64,256);const i=new Ie(r);return i.needsUpdate=!0,i}class zx{constructor(){$(this,"root",new Oe);$(this,"beams",[]);$(this,"strobes",[]);$(this,"themeUntil",0);$(this,"defaultColors",[16732067,3006719,16769126,11561983,16747082,8191920,16777215,16739029]);$(this,"coreTex");$(this,"glowTex");this.root.name="LaserShow",this.coreTex=kx(),this.glowTex=Gx(),this.addBeams(),this.addFanScanners(),this.addStrobes()}setTheme(t,e=4){this.themeUntil=performance.now()+e*1e3;for(let n=0;n<this.beams.length;n++){const i=n%2===0?t:16777215;this.beams[n].core.material.color.setHex(i),this.beams[n].glow.material.color.setHex(i)}}update(t){if(this.themeUntil&&performance.now()>this.themeUntil){this.themeUntil=0;for(let s=0;s<this.beams.length;s++){const a=this.defaultColors[s%this.defaultColors.length];this.beams[s].core.material.color.setHex(a),this.beams[s].glow.material.color.setHex(a)}}const e=t*(128/60*Math.PI),n=Math.abs(Math.sin(e)),i=n>.78?1:n;for(const s of this.beams){s.pivot.rotation.y=t*s.speed*1.35+s.phase+Math.sin(t*1.1+s.phase)*.55,s.pivot.rotation.x=-.75+Math.sin(t*s.speed*1.4+s.phase)*.55+Math.sin(t*s.sweep+s.phase)*.35;const a=i>.9||Math.sin(t*22+s.flashOffset)>.05?1:.25+n*.4,o=s.core.material,l=s.glow.material;o.opacity=Math.min(1,s.baseOpacity*1.35*a),l.opacity=Math.min(.95,s.baseOpacity*.75*a)}for(let s=0;s<this.strobes.length;s++){const a=i>.88?14+s*3:n*2.5;this.strobes[s].intensity=a}}addBeams(){const t=[{x:-3.4,y:7.8,z:-5.1},{x:3.4,y:7.8,z:-5.1},{x:-1.8,y:7.5,z:-4.2},{x:1.8,y:7.5,z:-4.2},{x:0,y:8,z:-5.6},{x:-2.6,y:7.2,z:-3.4},{x:2.6,y:7.2,z:-3.4},{x:0,y:7.4,z:-3.8}];for(let e=0;e<t.length;e++)this.spawnBeam(t[e],e,7.2,.95+e*.1,.78)}addFanScanners(){const t=[{x:-4.2,y:7,z:-4.6},{x:4.2,y:7,z:-4.6}];for(let e=0;e<t.length;e++)this.spawnBeam(t[e],8+e,8,.55+e*.08,.88,!0)}spawnBeam(t,e,n,i,s,a=!1){const o=this.defaultColors[e%this.defaultColors.length],l=new Oe;l.position.set(t.x,t.y,t.z);const c=new Pn({map:this.coreTex,color:o,transparent:!0,opacity:s,blending:Bn,depthWrite:!1,depthTest:!0,side:on}),h=new Pn({map:this.glowTex,color:o,transparent:!0,opacity:s*.55,blending:Bn,depthWrite:!1,depthTest:!0,side:on}),u=a?.05:.028,d=a?.28:.14,p=new Tt(new xi(u*.45,u,n,8,1,!0),c);p.position.y=-n/2;const g=new Tt(new ln(d*2,n),h);g.position.y=-n/2,l.add(g),l.add(p),this.root.add(l),this.beams.push({core:p,glow:g,pivot:l,speed:i,phase:e*.9,flashOffset:e*1.15,baseOpacity:s,sweep:a?1.8:.9})}addStrobes(){for(const[t,e,n,i]of[[0,7.8,-3.2,16771280],[-3.5,7,-2.8,16732067],[3.5,7,-2.8,5230847],[0,6.5,-1.5,11561983],[-2.2,6.8,.5,16769126],[2.2,6.8,.5,8191920]]){const s=new Kn(i,0,16,1.6);s.position.set(t,e,n),this.strobes.push(s),this.root.add(s)}}}function kx(){const r=document.createElement("canvas");r.width=64,r.height=256;const t=r.getContext("2d"),e=t.createLinearGradient(32,0,32,256);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.08,"rgba(255,255,255,1)"),e.addColorStop(.85,"rgba(255,255,255,0.75)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,256);const n=t.createLinearGradient(0,0,64,0);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.45,"rgba(255,255,255,1)"),n.addColorStop(.55,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.globalCompositeOperation="destination-in",t.fillStyle=n,t.fillRect(0,0,64,256);const i=new Ie(r);return i.needsUpdate=!0,i}function Gx(){const r=document.createElement("canvas");r.width=128,r.height=256;const t=r.getContext("2d"),e=t.createLinearGradient(64,0,64,256);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.12,"rgba(255,255,255,0.85)"),e.addColorStop(.8,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,256);const n=t.createLinearGradient(0,0,128,0);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.5,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.globalCompositeOperation="destination-in",t.fillStyle=n,t.fillRect(0,0,128,256);const i=new Ie(r);return i.needsUpdate=!0,i}class Hx{constructor(){$(this,"root",new Oe);$(this,"screenMat");$(this,"frameGlowMat");$(this,"canvas");$(this,"ctx");$(this,"tex");$(this,"flashUntil",0);$(this,"activeDonor",null);this.root.name="TopDonorScreen",this.root.position.set(0,.15,-7.85),this.canvas=document.createElement("canvas"),this.canvas.width=1280,this.canvas.height=720;const t=this.canvas.getContext("2d");if(!t)throw new Error("2D canvas unavailable");this.ctx=t,this.tex=new Ie(this.canvas),this.tex.colorSpace=se,this.tex.generateMipmaps=!1,this.tex.minFilter=Ke,this.tex.magFilter=Ke,this.screenMat=new Pn({map:this.tex,toneMapped:!1,depthWrite:!0,depthTest:!0}),this.frameGlowMat=new Jt({color:16723338,emissive:16723338,emissiveIntensity:.75}),this.addFrame(),this.addScreen(),this.paintIdle()}update(t){performance.now()<this.flashUntil?this.frameGlowMat.emissiveIntensity=1.2+Math.sin(t*16)*.8:this.frameGlowMat.emissiveIntensity=.65+Math.sin(t*3)*.15}showDonor(t,e=!0){this.activeDonor=t,this.paintDonor(t),e&&(this.flashUntil=performance.now()+2500)}hasDonor(){return this.activeDonor!==null}addFrame(){const t=new Tt(new Ee(10.2,4.6,.28),new Jt({color:1052696,metalness:.6,roughness:.3}));t.position.set(0,4.15,-.08),t.renderOrder=1,this.root.add(t);const e=new Tt(new Ee(10.4,4.8,.06),this.frameGlowMat);e.position.set(0,4.15,-.2),this.root.add(e)}addScreen(){const t=new Tt(new ln(9.5,4.15),this.screenMat);t.position.set(0,4.15,.1),t.renderOrder=2,this.root.add(t)}paintIdle(){const{ctx:t,canvas:e}=this;Vh(t,e.width,e.height),t.textAlign="center",t.textBaseline="middle",t.fillStyle="#FF8A4A",t.font="bold 72px Impact, Arial Black, sans-serif",t.fillText("TOP DONOR",e.width/2,e.height/2-48),t.fillStyle="#A8B0C8",t.font="36px Segoe UI, sans-serif",t.fillText("Ai donate nhieu nhat se len day",e.width/2,e.height/2+36),this.tex.needsUpdate=!0}paintDonor(t){const{ctx:e,canvas:n}=this,i=n.width,s=n.height;e.clearRect(0,0,i,s),Vh(e,i,s),e.fillStyle="rgba(255, 77, 163, 0.22)",e.fillRect(0,0,i,88),e.fillStyle="#FF8A4A",e.font="bold 52px Impact, Arial Black, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("TOP DONOR",i/2,46);const a=56,o=120,l=420,c=540;e.fillStyle="#161022",qx(e,a,o,l,c,28);try{const u=Wx(t.characterId),d=Px(u).image;Xx(e,d,a+20,o+20,l-40,c-40)}catch(u){console.warn("[TOP DONOR] portrait failed",u),e.fillStyle="#3a2860",e.font="bold 32px Segoe UI, sans-serif",e.textAlign="center",e.fillText("NO ART",a+l/2,o+c/2)}e.strokeStyle="#FFE066",e.lineWidth=6,Yx(e,a,o,l,c,28);const h=540;e.textAlign="left",e.textBaseline="alphabetic",e.fillStyle="#9AA3C0",e.font="bold 32px Segoe UI, sans-serif",e.fillText("#1 SESSION",h,180),e.fillStyle="#FFF8EE",e.font="bold 68px Segoe UI, sans-serif",e.fillText(`@${t.username}`.slice(0,14),h,270),e.fillStyle="#2DE0FF",e.font="bold 80px Impact, Arial Black, sans-serif",e.fillText(`${Vx(t.diamonds)} DIA`,h,390),e.fillStyle="#C8C0D8",e.font="30px Segoe UI, sans-serif",e.fillText("Tong kim cuong session",h,455),this.tex.needsUpdate=!0}}function Vh(r,t,e){const n=r.createLinearGradient(0,0,0,e);n.addColorStop(0,"#1a1040"),n.addColorStop(1,"#080612"),r.fillStyle=n,r.fillRect(0,0,t,e),r.strokeStyle="#FF4FA3",r.lineWidth=8,r.strokeRect(8,8,t-16,e-16),r.strokeStyle="#2DE0FF",r.lineWidth=2,r.strokeRect(20,20,t-40,e-40)}function Vx(r){return r>=1e3?`${(r/1e3).toFixed(r%1e3===0?0:1)}K`:String(Math.round(r))}function Wx(r){let t=0;for(let e=0;e<r.length;e++)t=t*31+r.charCodeAt(e)|0;return Math.abs(t)}function Xx(r,t,e,n,i,s){const a=t,o=Number(a.naturalWidth??a.width??0),l=Number(a.naturalHeight??a.height??0);if(!o||!l)return;const c=Math.min(i/o,s/l),h=o*c,u=l*c,d=e+(i-h)/2,p=n+(s-u)/2;r.drawImage(t,d,p,h,u)}function qx(r,t,e,n,i,s){Rd(r,t,e,n,i,s),r.fill()}function Yx(r,t,e,n,i,s){Rd(r,t,e,n,i,s),r.stroke()}function Rd(r,t,e,n,i,s){r.beginPath(),r.moveTo(t+s,e),r.arcTo(t+n,e,t+n,e+i,s),r.arcTo(t+n,e+i,t,e+i,s),r.arcTo(t,e+i,t,e,s),r.arcTo(t,e,t+n,e,s),r.closePath()}class $x{constructor(){$(this,"root",new Oe);$(this,"dj");$(this,"lasers");$(this,"disco");$(this,"donorScreen");$(this,"floorTiles",[]);$(this,"neonMats",[]);$(this,"streakSign",null);$(this,"streakUntil",0);$(this,"streakVisible",!1);$(this,"sparkles");$(this,"sparklePositions");$(this,"festoonLights",[]);this.root.name="BarScene",this.addGround(),this.addNightSky(),this.addHorizonSilhouette(),this.addDanceFloor(),this.addFestoon(),this.sparkles=this.addSparkles(),this.sparklePositions=this.sparkles.geometry.attributes.position.array,this.disco=new Nx,this.disco.root.position.set(0,8.4,-5.2),this.root.add(this.disco.root),this.donorScreen=new Hx,this.root.add(this.donorScreen.root),this.dj=new Fx,this.root.add(this.dj.root),this.lasers=new zx,this.root.add(this.lasers.root)}update(t,e=0){this.disco.update(t),this.dj.update(t),this.lasers.update(t),this.donorScreen.update(t);const n=t*(128/60*Math.PI),i=Math.abs(Math.sin(n)),s=i>.8?1:i;for(let a=0;a<this.floorTiles.length;a++){const o=this.floorTiles[a].material,l=Math.abs(Math.sin(n*2+a*.9));o.emissiveIntensity=l>.45?1.1+l*2.2:.15+s*.55,o.emissive.setHSL((t*.15+a*.12)%1,.95,.45)}for(let a=0;a<this.neonMats.length;a++)this.neonMats[a].emissiveIntensity=1.1+Math.sin(n*2+a)*.85+s*.6;if(this.festoonLights[0]&&(this.festoonLights[0].intensity=2.4+s*4.2),this.streakSign&&this.streakVisible)if(performance.now()>this.streakUntil)this.clearStreakBanner();else{const a=this.streakSign.material;a.opacity=.75+i*.25}if(e%4<2){const a=this.sparkles.material;a.opacity=.35+i*.45;for(let o=0;o<this.sparklePositions.length;o+=3)this.sparklePositions[o+1]+=.035+i*.02,this.sparklePositions[o]+=Math.sin(t+o)*.008,this.sparklePositions[o+1]>8&&(this.sparklePositions[o+1]=.6,this.sparklePositions[o]=(Math.random()-.5)*14,this.sparklePositions[o+2]=-1+(Math.random()-.5)*6);this.sparkles.geometry.attributes.position.needsUpdate=!0}}showStreakBanner(t,e,n){if(this.donorScreen.hasDonor())return;const i=e>1?`${t} x${e}`:t,s=`@${n.replace(/^@/,"")}`;this.streakSign?tM(this.streakSign,i,s):(this.streakSign=Qx(i,s,0,6.8,-6.4,5.5),this.root.add(this.streakSign)),this.streakVisible=!0,this.streakUntil=performance.now()+14e3}clearStreakBanner(){this.streakVisible=!1,this.streakSign&&(this.streakSign.material.opacity=0)}showTopDonor(t,e=!0){this.clearStreakBanner(),this.donorScreen.showDonor(t,e)}addGround(){const t=Zx();t.wrapS=t.wrapT=pa,t.repeat.set(8,6);const e=new Tt(new ln(52,40),new Jt({map:t,color:13166768,roughness:.92,metalness:.02}));e.rotation.x=-Math.PI/2,e.position.y=-.02,this.root.add(e);const n=Jx(),i=new Tt(new ds(10,40),new Jt({map:n,color:15258800,roughness:.85}));i.rotation.x=-Math.PI/2,i.position.set(0,.01,.2),this.root.add(i)}addNightSky(){const t=Kx(),e=new Tt(new ln(56,22),new Pn({map:t}));e.position.set(0,8.5,-12),this.root.add(e);const n=new Tt(new ln(56,4),new Pn({color:660008,transparent:!0,opacity:.55,depthWrite:!1}));n.position.set(0,1.4,-11.5),this.root.add(n)}addHorizonSilhouette(){const t=new Tt(new ln(50,5.5),new Pn({map:jx(),transparent:!0,depthWrite:!1}));t.position.set(0,2.4,-10.2),this.root.add(t);for(const e of[-14,-11,11,14]){const n=new Tt(new zl(1.4+Math.abs(e)*.02,4.2,7),new Jt({color:792592,roughness:1,flatShading:!0}));n.position.set(e,2,-7.5-(Math.abs(e)-11)*.3),this.root.add(n)}}addDanceFloor(){const t=[16723338,3006719,11561983,16769126,16747082,8191851];let e=0;for(let n=0;n<3;n++)for(let i=0;i<6;i++){const s=new Jt({color:1052696,emissive:t[e%t.length],emissiveIntensity:.5,roughness:.2,metalness:.55}),a=new Tt(new ln(1.15,1.15),s);a.rotation.x=-Math.PI/2,a.position.set(-2.9+i*1.2,.025,-1.5+n*1.25),this.floorTiles.push(a),this.root.add(a),e++}}addFestoon(){const t=new Kn(16760960,2,18,2);t.position.set(0,6.8,-2),this.festoonLights.push(t),this.root.add(t);const e=new Tt(new xi(.02,.02,11,6),new Jt({color:2236440}));e.rotation.z=Math.PI/2,e.position.set(0,7.2,-8),this.root.add(e);const n=new Jt({color:16765072,emissive:16752704,emissiveIntensity:.85});this.neonMats.push(n);for(let i=-4;i<=4;i++){const s=new Tt(new Ar(.09,8,8),n);s.position.set(i*1.25,7.05,-8),this.root.add(s)}}addSparkles(){const e=new Float32Array(270);for(let s=0;s<90;s++)e[s*3]=(Math.random()-.5)*14,e[s*3+1]=.6+Math.random()*6,e[s*3+2]=-1+(Math.random()-.5)*6;const n=new ke;n.setAttribute("position",new Xe(e,3));const i=new Tu(n,new Bl({color:16771264,size:.09,transparent:!0,opacity:.55,depthWrite:!1,blending:Bn}));return this.root.add(i),i}}function Kx(){const r=document.createElement("canvas");r.width=1024,r.height=512;const t=r.getContext("2d"),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#050816"),e.addColorStop(.35,"#121a3a"),e.addColorStop(.62,"#2a1848"),e.addColorStop(.82,"#4a2040"),e.addColorStop(1,"#1a1028"),t.fillStyle=e,t.fillRect(0,0,1024,512);for(const[s,a,o,l]of[[320,380,180,"rgba(255,80,160,0.28)"],[700,360,200,"rgba(60,180,255,0.22)"],[512,420,240,"rgba(255,140,60,0.18)"]]){const c=t.createRadialGradient(s,a,0,s,a,o);c.addColorStop(0,l),c.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=c,t.fillRect(0,0,1024,512)}for(let s=0;s<180;s++){const a=Math.random()*1024,o=Math.random()*280,l=.35+Math.random()*.65,c=Math.random()*1.8+.4;t.fillStyle=`rgba(255,255,255,${l})`,t.fillRect(a,o,c,c)}const n=t.createRadialGradient(820,90,0,820,90,42);n.addColorStop(0,"rgba(255,244,210,0.95)"),n.addColorStop(.5,"rgba(255,230,180,0.55)"),n.addColorStop(1,"rgba(255,230,180,0)"),t.fillStyle=n,t.beginPath(),t.arc(820,90,42,0,Math.PI*2),t.fill();const i=new Ie(r);return i.colorSpace=se,i.needsUpdate=!0,i}function jx(){const r=document.createElement("canvas");r.width=1024,r.height=160;const t=r.getContext("2d");t.clearRect(0,0,1024,160),t.fillStyle="#060a14";let e=0;for(;e<1024;){const i=28+Math.random()*55,s=40+Math.random()*100;t.fillRect(e,160-s,i,s),t.fillStyle=Math.random()>.5?"#ffb060":"#7ad0ff";for(let a=160-s+8;a<150;a+=12)for(let o=e+6;o<e+i-6;o+=10)Math.random()>.55&&t.fillRect(o,a,3,4);t.fillStyle="#060a14",e+=i+4}t.fillStyle="#08140c";for(const i of[40,90,930,980])t.beginPath(),t.moveTo(i,160),t.lineTo(i-35,160),t.lineTo(i,70+Math.random()*30),t.lineTo(i+35,160),t.fill();const n=new Ie(r);return n.colorSpace=se,n.needsUpdate=!0,n}function Zx(){const r=document.createElement("canvas");r.width=256,r.height=256;const t=r.getContext("2d");t.fillStyle="#4a8a42",t.fillRect(0,0,256,256);for(let n=0;n<1200;n++){const i=Math.random()*256,s=Math.random()*256;t.fillStyle=Math.random()>.5?"#6ab058":"#3a7038",t.fillRect(i,s,2,3+Math.random()*4)}const e=new Ie(r);return e.colorSpace=se,e.needsUpdate=!0,e}function Jx(){const r=document.createElement("canvas");r.width=256,r.height=256;const t=r.getContext("2d");t.fillStyle="#7a6040",t.fillRect(0,0,256,256);for(let n=0;n<800;n++)t.fillStyle=Math.random()>.5?"#9a7850":"#5a4428",t.fillRect(Math.random()*256,Math.random()*256,3,3);const e=new Ie(r);return e.colorSpace=se,e.needsUpdate=!0,e}function Qx(r,t,e,n,i,s){const a=document.createElement("canvas");a.width=768,a.height=180,Pd(a,r,t);const o=new Ie(a);o.colorSpace=se;const l=new Br(new Ki({map:o,transparent:!0,blending:Bn,depthWrite:!1}));return l.position.set(e,n,i),l.scale.set(s,s*.28,1),l}function tM(r,t,e){const n=r.material,i=n.map,s=document.createElement("canvas");s.width=768,s.height=180,Pd(s,t,e);const a=new Ie(s);a.colorSpace=se,n.map=a,n.opacity=1,n.needsUpdate=!0,i==null||i.dispose()}function Pd(r,t,e){const n=r.getContext("2d");n&&(n.clearRect(0,0,768,180),n.shadowColor="#FF8A4A",n.shadowBlur=22,n.fillStyle="#FFB060",n.font="bold 56px Impact, Arial Black, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(t.slice(0,22),384,70),n.fillStyle="#FFE8A0",n.font="bold 36px Segoe UI, sans-serif",n.fillText(e.slice(0,20),384,130))}const eM=2.55,Ln={xMin:-7.2,xMax:7.2,zMin:-2,zMax:3.4};function nM(r){for(let e=0;e<120;e++){const n=Wh();if(Xh(n,r))return n}const t=Wh();for(let e=1;e<=16;e++)for(let n=0;n<10;n++){const i=n/10*Math.PI*2+e*.4,s={x:qh(t.x+Math.cos(i)*e*.7,Ln.xMin,Ln.xMax),y:0,z:qh(t.z+Math.sin(i)*e*.7,Ln.zMin,Ln.zMax)};if(Xh(s,r))return s}return t}function iM(r){return!0}function Wh(){return{x:Ln.xMin+Math.random()*(Ln.xMax-Ln.xMin),y:0,z:Ln.zMin+Math.random()*(Ln.zMax-Ln.zMin)}}function Xh(r,t){for(const e of t)if(rM(e,r)<eM)return!1;return!0}function rM(r,t){const e=r.x-t.x,n=r.z-t.z;return Math.hypot(e,n)}function qh(r,t,e){return Math.max(t,Math.min(e,r))}class sM{constructor(t,e){$(this,"data");$(this,"root");$(this,"visual");$(this,"sprite");$(this,"nameSprite");$(this,"animTween",null);$(this,"seed");$(this,"idleActive",!1);$(this,"idlePhase");$(this,"idleStyle");$(this,"idleJumpH");$(this,"sharedBodyMat");$(this,"accent");$(this,"spotlightRing",null);$(this,"spotlightUntil",0);$(this,"visiting",!1);this.data=t,this.seed=oM(t.id),this.idlePhase=this.seed%8*.37,this.idleStyle=this.seed%3,this.idleJumpH=iM(t.position)?.2:.14,this.accent=Ix(this.seed),this.root=new Oe,this.root.name=t.id,this.root.position.set(t.position.x,t.position.y,t.position.z),this.visual=new Oe,this.root.add(this.visual);const n=Dx(this.seed);if(this.sharedBodyMat=!0,this.sprite=new Br(n),this.sprite.scale.set(1.7,2.25,1),this.sprite.position.y=1.15,this.visual.add(this.sprite),(e==null?void 0:e.showNameTag)!==!1){this.nameSprite=wo(t.username,this.accent,!1);const i=2.55+this.seed%5*.08;this.nameSprite.position.set(0,i,.05),this.nameSprite.renderOrder=20,this.root.add(this.nameSprite)}else this.nameSprite=null}getWorldPosition(t=new I){return this.root.getWorldPosition(t),t.y+=1.2,t}setState(t){this.data.state=t}updateIdle(t){if(this.spotlightRing&&performance.now()<this.spotlightUntil){const s=.55+(Math.sin(t*8)*.5+.5)*.45,a=this.spotlightRing.material;a.opacity=s,this.spotlightRing.rotation.z=t*1.5}else this.spotlightRing&&(this.spotlightRing.visible=!1);if(!this.idleActive||this.animTween||this.visiting)return;const e=t*(128/60*Math.PI)+this.idlePhase,n=Math.abs(Math.sin(e)),i=Math.sin(e*.5);if(this.idleStyle===0){this.root.position.y=this.data.position.y+n*this.idleJumpH,this.visual.rotation.z=i*.1,this.visual.rotation.y=i*.06;const s=n*.12;this.visual.scale.set(1+s*.7,1-s,1)}else if(this.idleStyle===1)this.root.position.y=this.data.position.y+n*this.idleJumpH*.65,this.visual.rotation.z=i*.22,this.visual.rotation.y=Math.sin(e*.35)*.1,this.visual.scale.set(1+n*.04,1-n*.06,1);else{const s=Math.abs(Math.sin(e*2));this.root.position.y=this.data.position.y+s*this.idleJumpH*.85,this.visual.rotation.z=Math.sin(e*2)*.14,this.visual.rotation.y=i*.08,this.visual.scale.set(1+s*.08,1-s*.1,1)}}spotlight(t=3.2){this.ensureNameTag(!0),this.ensureSpotlightRing(),this.spotlightUntil=performance.now()+t*1e3,this.spotlightRing.visible=!0,this.nameSprite&&(We.killTweensOf(this.nameSprite.scale),We.fromTo(this.nameSprite.scale,{x:1.9,y:.48},{x:2.3,y:.58,duration:.35,yoyo:!0,repeat:5,ease:"sine.inOut"}))}visitDj(t=2.4){this.visiting=!0,this.killIdle();const e=this.data.position.x,n=this.data.position.z,i=this.data.position.y,s=0,a=-2.8;return new Promise(o=>{We.timeline({onComplete:()=>{this.visiting=!1,this.root.position.set(e,i,n),this.startIdle(),o()}}).to(this.root.position,{x:s,z:a,y:i,duration:.55,ease:"power2.out"}).to(this.visual.rotation,{z:.12,yoyo:!0,repeat:5,duration:.12},.4).to({},{duration:t}).to(this.root.position,{x:e,z:n,y:i,duration:.55,ease:"power2.inOut"})})}ensureNameTag(t){if(this.nameSprite){if(t){const n=this.nameSprite.material.map;this.nameSprite.material.dispose(),n==null||n.dispose();const i=wo(this.data.username,this.accent,!0);i.position.copy(this.nameSprite.position),i.renderOrder=20,this.root.remove(this.nameSprite),this.nameSprite=i,this.root.add(i)}return}this.nameSprite=wo(this.data.username,this.accent,t);const e=2.55+this.seed%5*.08;this.nameSprite.position.set(0,e,.05),this.nameSprite.renderOrder=20,this.root.add(this.nameSprite)}ensureSpotlightRing(){if(this.spotlightRing)return;const t=new Pn({color:16769184,transparent:!0,opacity:.7,blending:Bn,depthWrite:!1,side:on}),e=new Tt(new kl(.35,.55,24),t);e.rotation.x=-Math.PI/2,e.position.y=.04,this.root.add(e),this.spotlightRing=e}playAnimation(t){return this.stopCurrentAnim(),console.log(`[ANIMATION] ${t}`),t==="idle"?(this.setState("idle"),this.startIdle(),Promise.resolve()):new Promise(e=>{const n=We.timeline({onComplete:()=>{this.animTween=null,this.setState("idle"),this.startIdle(),e()}});this.animTween=n,this.setState(aM(t));const i=this.data.position.y;switch(t){case"drink":{const s=this.root.position.x;n.to(this.visual.scale,{x:1.08,y:.88,duration:.15,ease:"power2.in"}).to(this.visual.rotation,{z:-.28,duration:.22,ease:"back.out(2)"},0).to(this.visual.rotation,{z:.42,duration:.35,ease:"power2.out"}).to(this.visual.scale,{x:.92,y:1.12,duration:.35,ease:"power2.out"},"<").to(this.root.position,{y:i+.08,duration:.35},"<").to({},{duration:.35}).to(this.visual.rotation,{z:.08,duration:.2}).to(this.visual.scale,{x:1.12,y:.9,duration:.12,yoyo:!0,repeat:3}).to(this.root.position,{x:s+.12,duration:.1,yoyo:!0,repeat:3,ease:"sine.inOut"},"<").to(this.visual.rotation,{z:0,duration:.25,ease:"back.out(1.5)"}).to(this.visual.scale,{x:1,y:1,duration:.25},"<").to(this.root.position,{x:s,y:i,duration:.25},"<");break}case"dance":{const s=this.root.position.x;for(let a=0;a<4;a++){const o=a*.42,l=a%2===0?1:-1;n.to(this.root.position,{x:s+l*.28,duration:.18,ease:"power2.out"},o).to(this.visual.rotation,{z:l*-.35,duration:.18,ease:"power2.out"},o).to(this.visual.scale,{x:1.15,y:.82,duration:.1,ease:"power2.in"},o).to(this.root.position,{y:i+.32,duration:.16,ease:"power1.out"},o+.1).to(this.visual.scale,{x:.88,y:1.18,duration:.16,ease:"sine.out"},o+.1).to(this.root.position,{y:i,duration:.14,ease:"power2.in"},o+.26).to(this.visual.scale,{x:1.1,y:.9,duration:.08},o+.28)}n.to(this.root.position,{x:s,duration:.2,ease:"back.out(1.4)"}).to(this.visual.rotation,{z:0,duration:.2},"<").to(this.visual.scale,{x:1,y:1,duration:.2},"<");break}case"surprised":{n.to(this.visual.scale,{x:1.25,y:.55,duration:.12,ease:"power3.in"}).to(this.visual.scale,{x:.7,y:1.45,duration:.18,ease:"back.out(4)"}).to(this.root.position,{y:i+.75,duration:.22,ease:"power2.out"},"<").to(this.visual.rotation,{z:.45,duration:.06,yoyo:!0,repeat:7,ease:"steps(1)"}).to(this.root.position,{y:i,duration:.45,ease:"bounce.out"}).to(this.visual.scale,{x:1.2,y:.85,duration:.12},"<").to(this.visual.scale,{x:1,y:1,duration:.2,ease:"back.out(2)"}).to(this.visual.rotation,{z:0,duration:.15},"<");break}case"celebrate":{const s=this.root.position.x;n.to(this.visual.scale,{x:.75,y:1.3,duration:.12,ease:"power2.in"}).to(this.root.position,{y:i+.95,duration:.28,ease:"power2.out"}).to(this.visual.scale,{x:1.25,y:.8,duration:.28},"<").to(this.visual.rotation,{z:.55,duration:.1,yoyo:!0,repeat:9,ease:"sine.inOut"},.1).to(this.root.position,{x:s+.35,duration:.12,yoyo:!0,repeat:7,ease:"sine.inOut"},.15).to(this.root.position,{y:i+.55,duration:.18,yoyo:!0,repeat:5,ease:"power1.inOut"},.25).to(this.visual.scale,{x:1.45,y:1.45,duration:.22,ease:"back.out(3)"}).to(this.visual.scale,{x:1,y:1,duration:.35,ease:"elastic.out(1,0.4)"}).to(this.root.position,{x:s,y:i,duration:.3,ease:"power2.out"},"<").to(this.visual.rotation,{z:0,duration:.25},"<");break}}})}playSpawn(){return this.killIdle(),this.visual.scale.set(0,0,0),new Promise(t=>{We.to(this.visual.scale,{x:1,y:1,z:1,duration:.5,ease:"back.out(2)",onComplete:()=>{this.startIdle(),t()}})})}resumeIdle(){this.startIdle()}dispose(){var t;if(this.stopCurrentAnim(),(t=this.root.parent)==null||t.remove(this.root),this.sharedBodyMat||this.sprite.material.dispose(),this.nameSprite){const e=this.nameSprite.material.map;this.nameSprite.material.dispose(),e==null||e.dispose()}this.spotlightRing&&(this.spotlightRing.material.dispose(),this.spotlightRing.geometry.dispose())}startIdle(){this.idleActive=!0}killIdle(){this.idleActive=!1}stopCurrentAnim(){var t;this.killIdle(),(t=this.animTween)==null||t.kill(),this.animTween=null,this.root.position.y=this.data.position.y,this.visiting||(this.root.position.x=this.data.position.x),this.visual.rotation.set(0,0,0),this.visual.scale.set(1,1,1)}}function aM(r){switch(r){case"drink":return"drinking";case"dance":return"dancing";case"surprised":return"surprised";case"celebrate":return"celebrating";default:return"idle"}}function oM(r){let t=0;for(let e=0;e<r.length;e++)t=t*31+r.charCodeAt(e)|0;return Math.abs(t)}function wo(r,t,e=!1){const n=document.createElement("canvas");n.width=256,n.height=64;const i=n.getContext("2d");if(!i)return new Br(new Ki({color:16777215}));i.clearRect(0,0,256,64),e?(i.shadowColor=t,i.shadowBlur=18,i.fillStyle="rgba(40, 20, 10, 0.92)"):i.fillStyle="rgba(10,6,18,0.82)",i.beginPath(),i.roundRect(8,12,240,40,14),i.fill(),i.strokeStyle=e?"#FFE8A0":t,i.lineWidth=e?4:3,i.stroke(),i.shadowBlur=0,i.fillStyle=e?"#FFE8A0":"#FFF8EE",i.font="bold 22px Segoe UI, sans-serif",i.textAlign="center",i.textBaseline="middle";const s=r.startsWith("@")?r:`@${r}`;i.fillText(s.slice(0,16),128,34);const a=new Ie(n);a.colorSpace=se;const o=new Br(new Ki({map:a,transparent:!0,depthTest:!1,depthWrite:!1}));return o.scale.set(1.9,.48,1),o.renderOrder=20,o}class lM{constructor(t){$(this,"scene");$(this,"byUserId",new Map);$(this,"byUsername",new Map);$(this,"byId",new Map);$(this,"nextIndex",0);$(this,"order",[]);this.scene=t}get count(){return this.byUserId.size}update(t){for(const e of this.byUserId.values())e.updateIdle(t)}assignCharacter(t,e={}){const n=this.byUserId.get(t.userId);if(n)return n.data.state==="sleeping"&&n.setState("idle"),n;const i=this.byUsername.get(na(t.username));if(i)return console.log(`[CHARACTER] reuse @${i.data.username} → ${i.data.id}`),i;this.ensureCapacity(),this.nextIndex+=1;const s=this.occupiedPositions(),a=e.position&&cM(e.position,s)?e.position:nM(s),o={id:e.id??`character_${String(this.nextIndex).padStart(3,"0")}`,userId:t.userId,username:t.username.replace(/^@/,""),position:{...a},type:t.type??"placeholder",state:"idle"},l=new sM(o,{showNameTag:!0});return this.scene.add(l.root),this.byUserId.set(o.userId,l),this.byUsername.set(na(o.username),l),this.byId.set(o.id,l),this.order.push(o.userId),console.log(`[CHARACTER] @${o.username} → ${o.id}`),e.spawn!==!1?l.playSpawn():l.resumeIdle(),l}getCharacterByUserId(t){return this.byUserId.get(t)}getCharacterByUsername(t){return this.byUsername.get(na(t))}getCharacterById(t){return this.byId.get(t)}markAway(t){const e=this.byUserId.get(t);e&&(e.setState("sleeping"),console.log(`[CHARACTER] @${e.data.username} away (sleeping)`))}removeCharacter(t){const e=this.byUserId.get(t);if(!e)return;this.byUserId.delete(t),this.byUsername.delete(na(e.data.username)),this.byId.delete(e.data.id);const n=this.order.indexOf(t);n>=0&&this.order.splice(n,1),e.dispose()}getAllCharacters(){return[...this.byUserId.values()]}seedPlaceholders(t,e=!0){const n=[];for(let i=0;i<t;i++)n.push(this.assignCharacter({userId:`demo_${i+1}`,username:`guest_${i+1}`},{spawn:e}));return n}occupiedPositions(){const t=[];for(const e of this.byUserId.values())t.push(e.data.position);return t}ensureCapacity(){if(this.byUserId.size<bo)return;for(const e of this.order){const n=this.byUserId.get(e);if((n==null?void 0:n.data.state)==="sleeping"){console.warn(`[CHARACTER] cap ${bo}: recycle sleeping`),this.removeCharacter(e);return}}const t=this.order[0];t&&(console.warn(`[CHARACTER] cap ${bo}: recycle oldest`),this.removeCharacter(t))}}function na(r){return r.replace(/^@/,"").toLowerCase()}function cM(r,t){for(const n of t)if(Math.hypot(n.x-r.x,n.z-r.z)<2.55)return!1;return!0}function hM(r){const t=r.assignCharacter({userId:"_assert_u1",username:"assert_alice"},{spawn:!1}),e=r.assignCharacter({userId:"_assert_u1",username:"assert_alice"},{spawn:!1}),n=r.assignCharacter({userId:"_assert_u2",username:"Assert_Alice"},{spawn:!1});if(t!==e)throw new Error("assertCharacterMapping: same userId created duplicate");if(t!==n)throw new Error("assertCharacterMapping: same username created duplicate");if(t.data.position.x!==e.data.position.x)throw new Error("assertCharacterMapping: position drifted on re-assign");r.removeCharacter("_assert_u1"),console.log("[CHARACTER] assert mapping OK")}const uM=Cx;class dM{constructor(){$(this,"root",new Oe);$(this,"bursts",[]);$(this,"heartTex");$(this,"sparkleTex");$(this,"starTex");this.root.name="GiftParticles",this.heartTex=gM(),this.sparkleTex=vM("#ffe8a0"),this.starTex=xM()}spawn(t,e,n){for(;this.bursts.length>=uM;)this.disposeBurst(this.bursts.shift());const i=Math.min(2,(n==null?void 0:n.intensity)??1),s=Math.floor(fM(t)*i),a=new Float32Array(s*3),o=new Float32Array(s*3),l=new Float32Array(s),c=new Float32Array(s),h=new Float32Array(s*3);for(let g=0;g<s;g++){const _=g*3;a[_]=e.x+(Math.random()-.5)*.25,a[_+1]=e.y+1.2+Math.random()*.4,a[_+2]=e.z+(Math.random()-.5)*.25;const m=mM(t);o[_]=m.x,o[_+1]=m.y,o[_+2]=m.z;const f=pM(t);c[g]=f,l[g]=f;const T=_M(t,g);h[_]=T.r,h[_+1]=T.g,h[_+2]=T.b}const u=new ke;u.setAttribute("position",new Xe(a,3)),u.setAttribute("color",new Xe(h,3));const d=new Bl({map:this.textureFor(t),vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:Bn,size:Yh(t),sizeAttenuation:!0}),p=new Tu(u,d);p.frustumCulled=!1,this.root.add(p),this.bursts.push({points:p,velocities:o,life:l,maxLife:c,age:0,duration:Dd(t),kind:t,baseSize:Yh(t)})}update(t){for(let e=this.bursts.length-1;e>=0;e--){const n=this.bursts[e];n.age+=t;const i=n.points.geometry.attributes.position.array,s=n.life.length;let a=0;for(let c=0;c<s;c++){if(n.life[c]-=t,n.life[c]<=0){i[c*3+1]=-999;continue}a++;const h=c*3;i[h]+=n.velocities[h]*t,i[h+1]+=n.velocities[h+1]*t,i[h+2]+=n.velocities[h+2]*t,n.kind==="hearts"?(n.velocities[h]+=Math.sin(n.age*6+c)*.8*t,n.velocities[h+1]+=.6*t):n.kind==="burst"?n.velocities[h+1]-=4.5*t:n.kind==="stars"?(n.velocities[h]*=1-.4*t,n.velocities[h+2]*=1-.4*t,n.velocities[h+1]+=.35*t):n.velocities[h+1]-=1.2*t}n.points.geometry.attributes.position.needsUpdate=!0;const o=n.points.material,l=1-n.age/n.duration;o.opacity=Math.max(0,l),(n.kind==="stars"||n.kind==="sparkles")&&(o.size=n.baseSize*(.7+Math.sin(n.age*14)*.3)),(n.age>=n.duration||a===0)&&(this.bursts.splice(e,1),this.disposeBurst(n))}}dispose(){for(;this.bursts.length;)this.disposeBurst(this.bursts.pop());this.heartTex.dispose(),this.sparkleTex.dispose(),this.starTex.dispose()}textureFor(t){return t==="hearts"?this.heartTex:t==="stars"?this.starTex:this.sparkleTex}disposeBurst(t){this.root.remove(t.points),t.points.geometry.dispose(),t.points.material.dispose()}}function fM(r){switch(r){case"hearts":return 22;case"sparkles":return 32;case"burst":return 48;case"stars":return 40}}function Yh(r){switch(r){case"hearts":return .45;case"sparkles":return .28;case"burst":return .35;case"stars":return .4}}function Dd(r){switch(r){case"hearts":return 2.2;case"sparkles":return 1.8;case"burst":return 2;case"stars":return 2.8}}function pM(r){return Dd(r)*(.55+Math.random()*.45)}function mM(r){const t=()=>Math.random()-.5;switch(r){case"hearts":return new I(t()*.8,1.2+Math.random()*1.2,t()*.8);case"sparkles":return new I(t()*2.2,1.5+Math.random()*2,t()*2.2);case"burst":return new I(t()*5,2+Math.random()*4,t()*5);case"stars":return new I(t()*1.4,.6+Math.random()*1.5,t()*1.4)}}function _M(r,t){switch(r){case"hearts":return new wt(t%3===0?16738989:16724821);case"sparkles":return new wt(t%2===0?16771232:16777215);case"burst":{const e=[16732067,3006719,16769126,16747082,11561983];return new wt(e[t%e.length])}case"stars":return new wt(t%4===0?11067647:16777215)}}function gM(){const r=document.createElement("canvas");r.width=r.height=64;const t=r.getContext("2d");t.clearRect(0,0,64,64),t.fillStyle="#fff",t.beginPath();const e=32,n=30;t.moveTo(e,n+12),t.bezierCurveTo(e,n+4,e-18,n-2,e-18,n-10),t.bezierCurveTo(e-18,n-20,e-4,n-20,e,n-12),t.bezierCurveTo(e+4,n-20,e+18,n-20,e+18,n-10),t.bezierCurveTo(e+18,n-2,e,n+4,e,n+12),t.fill();const i=new Ie(r);return i.colorSpace=se,i}function vM(r){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,30);n.addColorStop(0,r),n.addColorStop(.35,r),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);const i=new Ie(t);return i.colorSpace=se,i}function xM(){const r=document.createElement("canvas");r.width=r.height=64;const t=r.getContext("2d");t.clearRect(0,0,64,64),t.translate(32,32),t.beginPath();for(let i=0;i<5;i++){const s=i*Math.PI*2/5-Math.PI/2,a=Math.cos(s)*14,o=Math.sin(s)*14,l=Math.cos(s+Math.PI/5)*6,c=Math.sin(s+Math.PI/5)*6;i===0?t.moveTo(a,o):t.lineTo(a,o),t.lineTo(l,c)}t.closePath(),t.fillStyle="#fff",t.fill(),t.globalCompositeOperation="destination-over";const e=t.createRadialGradient(0,0,2,0,0,28);e.addColorStop(0,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.beginPath(),t.arc(0,0,28,0,Math.PI*2),t.fill();const n=new Ie(r);return n.colorSpace=se,n}class MM{constructor(t,e){$(this,"renderer");$(this,"scene");$(this,"cameraController");$(this,"characters");$(this,"bar");$(this,"particles");$(this,"transparent");$(this,"lights");$(this,"clock",new Ep);$(this,"raf",0);$(this,"running",!1);$(this,"frame",0);$(this,"onResize",()=>{const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.cameraController.resize(t/e)});$(this,"onVisibility",()=>{document.hidden||this.clock.getDelta()});this.transparent=(e==null?void 0:e.transparent)===!0,this.scene=new cp,this.transparent?(this.scene.background=null,this.scene.fog=null):(this.scene.background=new wt(1186362),this.scene.fog=new Nl(1186362,22,48)),this.renderer=new av({canvas:t,antialias:!1,alpha:!0,powerPreference:"high-performance",stencil:!1,depth:!0});const n=this.transparent?1:1.25;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,n)),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.renderer.setClearColor(0,this.transparent?0:1),this.renderer.shadowMap.enabled=!1,this.renderer.outputColorSpace=se,this.renderer.toneMapping=Jn,this.cameraController=new wx(window.innerWidth/window.innerHeight),this.lights=Ax(this.scene),this.bar=new $x,this.scene.add(this.bar.root),this.characters=new lM(this.scene),this.particles=new dM,this.scene.add(this.particles.root),window.addEventListener("resize",this.onResize)}start(){if(this.running)return;this.running=!0,document.addEventListener("visibilitychange",this.onVisibility);const t=()=>{if(this.raf=requestAnimationFrame(t),document.hidden)return;const e=Math.min(this.clock.getDelta(),.05),n=this.clock.elapsedTime;this.frame++,this.characters.update(n),this.cameraController.update(),this.particles.update(e),this.bar.update(n,this.frame),this.lights.update(n),this.renderer.render(this.scene,this.cameraController.camera)};t()}stop(){this.running=!1,cancelAnimationFrame(this.raf),document.removeEventListener("visibilitychange",this.onVisibility)}dispose(){this.stop(),window.removeEventListener("resize",this.onResize),this.characters.getAllCharacters().forEach(t=>t.dispose()),this.particles.dispose(),this.renderer.dispose()}}const SM={rose:{animation:"drink",particle:"hearts",holdSeconds:2.4,screenShake:!1,cameraDrama:1},small:{animation:"surprised",particle:"sparkles",holdSeconds:2.4,screenShake:!1,cameraDrama:1},medium:{animation:"dance",particle:"sparkles",particleEncore:"hearts",holdSeconds:3,screenShake:!1,cameraDrama:1},large:{animation:"celebrate",particle:"burst",particleEncore:"sparkles",holdSeconds:3.5,screenShake:!0,cameraDrama:2},universe:{animation:"celebrate",particle:"stars",particleEncore:"burst",holdSeconds:4.2,screenShake:!0,cameraDrama:2}},yM={rose:"rose",roses:"rose",rosa:"rose","hoa hồng":"rose","tiny potato":"small",potato:"small",gg:"small","ice cream cone":"small","medium gift":"medium","finger heart":"medium",perfume:"medium",lion:"large","dono's lion":"large","drama queen":"large","tiktok universe":"universe",universe:"universe",galaxy:"universe"},EM={rose:"🌹",roses:"🌹",rosa:"🌹","hoa hồng":"🌹","tiny potato":"🥔",potato:"🥔",gg:"👍","ice cream cone":"🍦","medium gift":"🎁","finger heart":"💕",perfume:"🧴",lion:"🦁","dono's lion":"🦁","tiktok universe":"🌌",universe:"🌌",galaxy:"🌌","drama queen":"👑"},TM={rose:"🌹",small:"🎁",medium:"🎁",large:"🦁",universe:"🌌"};function Id(r,t){return t!==void 0&&t>0?t>=1e3?"universe":t>=100?"large":t>=10?"medium":"rose":yM[Ld(r)]??"small"}function bM(r,t){const e=Ld(r);return EM[e]??TM[t]}function wM(r){const t=Id(r.giftName,r.diamondCount),e=SM[t],n=bM(r.giftName,t);return{tier:t,...e,label:r.giftName,emoji:n}}function AM(r,t){const e=r.repeatCount&&r.repeatCount>1?` x${r.repeatCount}`:"";return`${t.emoji} ${t.label.toUpperCase()}${e}`}function Ld(r){return r.trim().toLowerCase().replace(/\s+/g," ")}class CM{constructor(t=14e3){$(this,"userId",null);$(this,"username","");$(this,"giftKey","");$(this,"count",0);$(this,"expiresAt",0);$(this,"windowMs");this.windowMs=t}apply(t){const e=Date.now(),n=t.giftName.trim(),i=n.toLowerCase(),s=Math.max(1,t.repeatCount??1),a=t.username.replace(/^@/,""),o=this.userId===t.userId&&this.giftKey===i&&e<this.expiresAt;return o?this.count+=s:(this.userId=t.userId,this.username=a,this.giftKey=i,this.count=s),this.expiresAt=e+this.windowMs,{count:this.count,continued:o,label:n.toUpperCase(),user:this.username}}isActive(t=Date.now()){return this.count>0&&t<this.expiresAt}clear(){this.userId=null,this.giftKey="",this.count=0,this.expiresAt=0}}class RM{constructor(){$(this,"byUser",new Map);$(this,"top",null)}add(t,e,n,i){var h;const s=Math.max(0,n),a=e.replace(/^@/,"");let o=this.byUser.get(t);o||(o={userId:t,username:a,diamonds:0,characterId:i},this.byUser.set(t,o)),o.diamonds+=s,o.username=a,o.characterId=i;const l=((h=this.top)==null?void 0:h.userId)??null;this.recomputeTop();const c=this.top;return{total:o.diamonds,topChanged:c.userId!==l,top:c}}getTop(){return this.top}recomputeTop(){let t=null;for(const e of this.byUser.values())(!t||e.diamonds>t.diamonds||e.diamonds===t.diamonds&&e.userId<t.userId)&&(t=e);this.top=t}}const $h=[16732067,3006719,16769126,16747082,11561983];class PM{constructor(t){$(this,"deps");$(this,"tmp",new I);$(this,"streak",new CM);$(this,"donors",new RM);this.deps=t}async handleGift(t){console.log(`[GIFT] received @${t.username} → ${t.giftName} x${t.repeatCount??1}`);let e=this.deps.characters.getCharacterByUserId(t.userId)??this.deps.characters.getCharacterByUsername(t.username);e||(e=this.deps.characters.assignCharacter({userId:t.userId,username:t.username}));const n=wM(t),i=AM(t,n),s=`@${t.username.replace(/^@/,"")}`,a=DM(t);console.log(`[GIFT] tier=${n.tier} anim=${n.animation} drama=${n.cameraDrama} · ${a}💎 total`);const o=this.donors.add(t.userId,t.username,a,e.data.id),l=this.streak.apply(t);this.deps.bar.showStreakBanner(l.label,l.count,l.user),this.deps.bar.showTopDonor(o.top,o.topChanged);const c=n.tier==="medium"||n.tier==="large"||n.tier==="universe",h=l.count>1?l.continued?`COMBO x${l.count}`:`STREAK x${l.count}`:"SPOTLIGHT",u=o.topChanged?" · 📺 TOP DONOR":"";if(e.spotlight(n.holdSeconds+1.2),this.deps.notification.show({title:i,subtitle:c?`${h} · ${s} · 🎧 DJ REQUEST${u}`:`${h} · ${s} đang được phục vụ${u}`}),n.particle!=="none"){const d=(n.tier==="universe"?2.2:n.tier==="large"?1.7:n.tier==="medium"?1.25:1)*(1+Math.min(1.5,((t.repeatCount??1)-1)*.08));this.deps.particles.spawn(n.particle,e.getWorldPosition(this.tmp),{intensity:d}),n.particleEncore&&window.setTimeout(()=>{this.deps.particles.spawn(n.particleEncore,e.getWorldPosition(this.tmp),{intensity:d*.9})},700)}if(n.screenShake&&this.deps.notification.shake(),c){const d=$h[Math.abs(IM(t.userId))%$h.length];this.deps.bar.dj.requestBeat(n.holdSeconds+1.5),this.deps.bar.lasers.setTheme(d,n.holdSeconds+1.5)}c?await Promise.all([e.visitDj(Math.min(2.2,n.holdSeconds*.55)).then(()=>e.playAnimation(n.animation)),this.deps.camera.focusPoint(0,1.55,-2.8,n.holdSeconds,n.cameraDrama)]):await Promise.all([e.playAnimation(n.animation),this.deps.camera.focusCharacter(e,n.holdSeconds,n.cameraDrama)]),console.log(`[GIFT] processed ${e.data.id}`)}}function DM(r){const t=Math.max(1,r.repeatCount??1);if(r.diamondCount!==void 0&&r.diamondCount>0)return r.diamondCount*t;const e=Id(r.giftName);return(e==="universe"?1e3:e==="large"?299:e==="medium"?10:e==="rose"?1:5)*t}function IM(r){let t=0;for(let e=0;e<r.length;e++)t=t*31+r.charCodeAt(e)|0;return t}class LM{constructor(t){$(this,"queue",[]);$(this,"seen",new Set);$(this,"processing",!1);$(this,"handle");this.handle=t}get size(){return this.queue.length}isProcessing(){return this.processing}enqueue(t){if(!t.username||!t.giftName){console.warn("[GIFT QUEUE] invalid gift ignored",t);return}if(t.eventKey){if(this.seen.has(t.eventKey)){console.log("[GIFT QUEUE] duplicate skipped",t.eventKey);return}if(this.seen.add(t.eventKey),this.seen.size>500){const e=this.seen.values().next().value;e!==void 0&&this.seen.delete(e)}}if(t.repeatEnd===!1){const e=this.queue[this.queue.length-1];if(e&&e.userId===t.userId&&e.giftName===t.giftName&&e.repeatEnd===!1){e.repeatCount=Math.max(e.repeatCount??1,t.repeatCount??1),console.log(`[GIFT QUEUE] combo update ${t.giftName} x${e.repeatCount}`);return}}for(this.queue.push({...t,repeatCount:t.repeatCount??1});this.queue.length>zh;){const e=this.queue.shift();console.warn(`[GIFT QUEUE] overflow>${zh}, dropped ${e==null?void 0:e.giftName}`)}console.log(`[GIFT QUEUE] enqueued ${t.giftName} (size=${this.queue.length})`),this.pump()}clear(){this.queue.length=0}async pump(){if(!this.processing){for(this.processing=!0;this.queue.length>0;){const t=this.queue.shift();console.log(`[GIFT QUEUE] Processing ${t.giftName}`);try{await this.handle(t),console.log("[GIFT QUEUE] Completed")}catch(e){console.error("[GIFT QUEUE] handler failed",e)}}this.processing=!1}}}class UM{constructor(t){$(this,"root");$(this,"card");$(this,"titleEl");$(this,"subtitleEl");$(this,"hideTween",null);this.root=document.createElement("div"),this.root.className="gift-notification-root",this.root.innerHTML=`
      <div class="gift-notification-card" data-card>
        <div class="gift-notification-title" data-title></div>
        <div class="gift-notification-subtitle" data-subtitle></div>
      </div>
    `,t.appendChild(this.root),this.card=this.root.querySelector("[data-card]"),this.titleEl=this.root.querySelector("[data-title]"),this.subtitleEl=this.root.querySelector("[data-subtitle]"),We.set(this.card,{autoAlpha:0,scale:.85})}show(t){var e;(e=this.hideTween)==null||e.kill(),this.titleEl.textContent=t.title,this.subtitleEl.textContent=t.subtitle,We.killTweensOf(this.card),We.fromTo(this.card,{autoAlpha:0,scale:.85,y:12},{autoAlpha:1,scale:1,y:0,duration:.35,ease:"back.out(1.6)"}),this.hideTween=We.delayedCall(2.6,()=>{We.to(this.card,{autoAlpha:0,scale:.92,duration:.3,ease:"power2.in"})})}shake(){We.fromTo(this.root,{x:0},{x:8,duration:.05,yoyo:!0,repeat:7,ease:"power1.inOut"})}}class FM{constructor(t){$(this,"el");this.el=document.createElement("div"),this.el.className="viewer-counter",this.el.textContent="👥 — viewers",t.appendChild(this.el)}setCount(t){this.el.textContent=`👥 ${t} viewers`}}const Ud=document.querySelector("#scene-canvas"),Fd=document.querySelector("#ui-root");if(!Ud||!Fd)throw new Error("Missing #scene-canvas or #ui-root");const NM=Ud,Kh=Fd,Al=new URLSearchParams(window.location.search),OM=window.location.pathname.replace(/\/+$/,"")||"/",Ra=OM.endsWith("/overlay")||Al.get("overlay")==="1"||Al.get("overlay")==="true",BM=!Ra&&Al.get("debug")!=="false";Ra&&(document.documentElement.classList.add("overlay-mode"),document.title="Meme Bar Overlay");zM();async function zM(){var l;try{await Ux()}catch(c){console.error("[APP] character art failed",c);const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;display:grid;place-items:center;color:#ffb14a;font:16px Segoe UI;background:#120818;z-index:50;padding:24px;text-align:center",h.textContent="Thiếu ảnh nhân vật trong frontend/public/characters (char_01…08.png + dj.png). Xem console.",document.body.appendChild(h);return}const r=new MM(NM,{transparent:Ra}),t=r.characters.seedPlaceholders(8,!1);Promise.all(t.map(c=>c.playSpawn())),hM(r.characters);const e=new UM(Kh),n=new FM(Kh),i=new PM({characters:r.characters,camera:r.cameraController,notification:e,particles:r.particles,bar:r.bar}),s=new LM(c=>i.handleGift(c)),a={tiktokStatus:"disconnected",lastGiftLabel:"—"},o=Wd(r.characters,s,{onTikTokStatus:c=>{a.tiktokStatus=c},onViewerUpdate:c=>{n.setCount(c)}});r.start(),BM?(kM(r,r.characters,a),HM(r.characters,s,o,a)):(l=document.querySelector("#dev-panel"))==null||l.remove(),console.log(Ra?"[APP] OBS overlay mode (transparent, no debug)":"[APP] Illustrated characters ready"),window.memeBar=r,window.giftQueue=s,window.memeSocket=o}function kM(r,t,e){var i,s,a,o,l,c;const n=document.querySelector("#assign-username");(i=document.querySelector("#btn-assign"))==null||i.addEventListener("click",()=>{const h=(n==null?void 0:n.value.trim())||"demo_user";Xd(h).catch(u=>{console.warn("[TEST] join via server failed, local assign",u),t.assignCharacter({userId:`user_${Zh(h)}`,username:h})})}),(s=document.querySelector("#btn-assign-dup"))==null||s.addEventListener("click",()=>{const h=(n==null?void 0:n.value.trim())||"demo_user",u=`user_${Zh(h)}`,d=t.assignCharacter({userId:u,username:h},{spawn:!1}),p=t.assignCharacter({userId:u,username:h},{spawn:!1});console.log(`[TEST] re-assign same user → same instance: ${d===p}, id=${d.data.id}`)}),(a=document.querySelector("#btn-lookup"))==null||a.addEventListener("click",()=>{const h=(n==null?void 0:n.value.trim())||"demo_user",u=t.getCharacterByUsername(h);console.log(u?`[TEST] lookup @${h} → ${u.data.id}`:`[TEST] lookup @${h} → not found`)}),document.querySelectorAll("[data-gift]").forEach(h=>{h.addEventListener("click",()=>{const u=h.dataset.gift??"Rose",d=Number(h.dataset.repeat??"1");jh(t,u,d,e)})}),(o=document.querySelector("#btn-burst-queue"))==null||o.addEventListener("click",()=>{const h=[{giftName:"Rose",repeatCount:5},{giftName:"Lion"},{giftName:"Rose",repeatCount:3},{giftName:"Universe"},{giftName:"Medium Gift"}];(async()=>{for(const u of h)await jh(t,u.giftName,u.repeatCount??1,e)})()}),(l=document.querySelector("#btn-reset-camera"))==null||l.addEventListener("click",()=>{r.cameraController.resetToGlobal()}),(c=document.querySelector("#btn-tiktok-connect"))==null||c.addEventListener("click",()=>{const h=n==null?void 0:n.value.trim();qd(h||void 0).catch(u=>{console.error("[TIKTOK] connect failed",u)})})}async function jh(r,t,e,n){const i=r.getAllCharacters(),s=i[Math.floor(Math.random()*i.length)]??r.assignCharacter({userId:"demo_fallback",username:"fallback"});n.lastGiftLabel=`@${s.data.username} → ${t} x${e}`;try{await Yd({username:s.data.username,userId:s.data.userId,giftName:t,repeatCount:e,diamondCount:GM(t)})}catch(a){console.error("[GIFT] server demo failed — is backend running?",a)}}function GM(r){switch(r.toLowerCase()){case"universe":return 1e3;case"lion":return 299;case"medium gift":return 10;case"rose":return 1;default:return 1}}function HM(r,t,e,n){const i=document.querySelector("#dev-stats"),s=document.querySelector("#tiktok-status"),a=document.querySelector("#last-gift");if(!i)return;const o=()=>{const l=n.tiktokStatus,c=l==="connected"?"🟢":l==="connecting"?"🟡":l==="error"?"🔴":"⚪";s&&(s.textContent=`TikTok: ${c} ${l}`),a&&(a.textContent=`Last Gift: ${n.lastGiftLabel}`),i.textContent=`Characters: ${r.count} · Queue: ${t.size}${t.isProcessing()?" (processing)":""} · Socket: ${e.connected?"on":"off"}`,requestAnimationFrame(o)};o()}function Zh(r){return r.replace(/^@/,"").toLowerCase()}
