package com.example.demo.controler;

import com.example.demo.model.DataDto;
import com.example.demo.service.impl.TestImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/new")
public class DemoController {

	@Autowired
	TestImpl test;


	@RequestMapping("/add")
	public String add(){
		test.add();
		return "add";
	}


	/**
	 * http://127.0.0.1:8080/new/list
	 * @return
	 */
	@RequestMapping("/list")
	public List<DataDto> newList(){
		test.add();
		List<DataDto> data=new ArrayList<>();
		DataDto dataDto=new DataDto();
		dataDto.setId(1);
		dataDto.setTitle("this is news 1");
		dataDto.setUrl("/news/1");
		data.add(dataDto);
		DataDto dataDto3=new DataDto();
		dataDto3.setId(3);
		dataDto3.setTitle("this is news 3");
		dataDto3.setUrl("/news/3");
		data.add(dataDto3);
		System.out.println("11111111111111111111111111111");
		return data;
	}


	@RequestMapping("/del")
	public String del(){
		return "del";
	}
}
