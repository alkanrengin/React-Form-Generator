import React, { FormEvent, Fragment, useEffect } from "react";
import { useState } from "react";
import { formGetir } from "../config/Service";
import { Formg, TentacledChild } from "../models/IForm";

export default function Form() {
  const [axiosForm, setAxiosForm] = useState<TentacledChild[]>([]);
  const [htmlForm, setHtmlForm] = useState<[]>([]);

  const [userData, setUserData] = useState<{}>({});


  
  

  useEffect(() => {
    formGetir().then((res) => {
      const formData: Formg = res.data;

      const mappedFormData =
        formData.forms[0].bilgiler.formjson.children[0].children[0].children[0]
          .children;

      setAxiosForm(mappedFormData);
    });


    let arrAxios: any = [];
    axiosForm.map((item, index) => {
      arrAxios.push(item);
      if (item.tag !== "legend") {
        item.children?.map((item, index) => {
          arrAxios.push(item);
          if (item.tag === "div") {
            item?.children?.map((item, index) => {
              arrAxios.push(item);
              if (item.tag === "label" || item.tag === "select") {
                item?.children?.map((item: any, index: any) => {
                  arrAxios.push(item);
                });
              }
              setHtmlForm(arrAxios);
            });
          }
        });
      }
    });
  }, [axiosForm]);

 

  function userChange(e: any) {
    
    
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
      
    });
    
    
  }

  function formSubmit(e: any) {
    e.preventDefault();

    console.log("userData :>> ", userData);

  }



  return (
    <>
      <form onSubmit={(e) => formSubmit(e)}>
        <div>
          <div></div>
          <div>
            {htmlForm &&
            
              htmlForm.map((item: any, index: any) => {
                
                if (item.tag === "select") {
                  
                  return (
                    <Fragment key={index}>
                      {React.createElement(
                        
                        item.tag,
                        {
                          className: item.class,
                          placeholder: item.placeholder,
                          name: item.name,
                          htmlFor: item.for,
                          value: item.value,
                          type: item.type,
                          key: index,
                          onChange: userChange,
                        },
                      
                        item.children.map((item: any, index: any) => {
                          return React.createElement(
                            item.tag,
                            {
                              className: item.class,
                              placeholder: item.placeholder,
                              name: item.name,
                              htmlFor: item.for,
                              value: item.value,
                              type: item.type,
                              key: index,
                              onChange: userChange,
                              
                            },

                            item.html
                          );
                        })
                      )}
                    </Fragment>
                  );
                } else {
                 
                  if (item.tag !== "select" && item.tag !== "option") {
                    return React.createElement(
                      item.tag,
                      {
                        className: item.class,
                        placeholder: item.placeholder,
                        name: item.name,
                        htmlFor: item.for,
                        value: item.value,
                        type: item.type,
                        key: index,
                        onChange: userChange,
                      },

                      item.html
                    );
                  }

                }
              })}
          </div>
          <div></div>
        </div>
      </form>
    </>
  );
}
