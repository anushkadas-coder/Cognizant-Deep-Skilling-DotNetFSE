using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

public class CustomExceptionFilter : IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        File.AppendAllText("error.log", $"{DateTime.Now}: {context.Exception.Message}\n");
        context.Result = new ObjectResult(new { error = "Internal server error" }) { StatusCode = 500 };
        context.ExceptionHandled = true;
    }
}